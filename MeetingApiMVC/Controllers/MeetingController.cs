using System;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using MeetingApiMVC.Models;
using Microsoft.Extensions.Logging;
// Ensure this is the correct namespace

namespace MeetingApiMVC.Controllers
{
    public class MeetingController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly ILogger<MeetingController> _logger;

        public MeetingController(IHttpClientFactory httpClientFactory, ILogger<MeetingController> logger)
        {
            _httpClientFactory = httpClientFactory;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Create(MeetingViewModel meeting, string attendeeEmails)
        {
            _logger.LogInformation("Received attendeeEmails: {emails}", attendeeEmails);

            if (!string.IsNullOrWhiteSpace(attendeeEmails))
            {
                meeting.AttendeeEmailIds = attendeeEmails
                    .Split(',', StringSplitOptions.RemoveEmptyEntries)
                    .Select(email => email.Trim())
                    .ToList();
            }

            _logger.LogInformation("Processed Attendee Emails: {emails}", string.Join(", ", meeting.AttendeeEmailIds));

            var httpClient = _httpClientFactory.CreateClient("MeetingApi");
            var json = JsonSerializer.Serialize(meeting);

            _logger.LogInformation("JSON Payload: {json}", json);

            var content = new StringContent(json, Encoding.UTF8, "application/json");
            var response = await httpClient.PostAsync("api/Meeting", content);

            if (response.IsSuccessStatusCode)
            {
                return RedirectToAction("Success");
            }
            else
            {
                string errorMessage = await response.Content.ReadAsStringAsync();
                _logger.LogError("API Error: {error}", errorMessage);

                ModelState.AddModelError("", "Failed to create meeting. API Response: " + errorMessage);
                return View(meeting);
            }
        }



        public IActionResult Success()
        {
            return View();
        }
    }
}
