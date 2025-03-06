using AutoMapper;
using MeetingApi.Data;
using MeetingApi.DTO;
using MeetingApi.Model.Domain;
using MeetingApi.Repository;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;

namespace MeetingApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeetingController : ControllerBase
    {
        private readonly IMeetingRepository _repo;
        private readonly IAdminUserRepository _adminUserRepo;
        private readonly IMeetingAttendeeRepository _attendeeRepo;
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext _context;

        public MeetingController(IMeetingRepository meetingRepo, IAdminUserRepository adminUserRepo, IMapper mapper,ApplicationDbContext context, IMeetingAttendeeRepository attendeeRepo)
        {
            _repo = meetingRepo;
            _adminUserRepo = adminUserRepo;
            _mapper = mapper;
            _context = context;
            _attendeeRepo = attendeeRepo;
        }

        [HttpPost]
        public async Task<IActionResult> CreateMeeting(AddMeetingRequestDto meetingDto)
        {
            

            var meeting = new Meeting
            {
                Name = meetingDto.Name,
                Date = meetingDto.Date,
                StartTime = meetingDto.StartTime,
                EndTime = meetingDto.EndTime,
                Description = meetingDto.Description
            };

            var addedMeeting = await _repo.AddMeetingAsync(meeting);

            foreach (var email in meetingDto.AttendeeEmailIds)
            {
                var user = await _adminUserRepo.GetUserByEmailAsync(email);
                if (user != null)
                {
                    var meetingAttendee = new MeetingAttendees
                    {
                        MeetingId = addedMeeting.Id,
                        AdminUserId = user.Id
                    };
                    await _context.MeetingAttendees.AddAsync(meetingAttendee);
                }
            }

            await _context.SaveChangesAsync();

            var meetingDtoResponse = _mapper.Map<MeetingDto>(addedMeeting);
            meetingDtoResponse.AttendeesEmails = meetingDto.AttendeeEmailIds;

            return CreatedAtAction(nameof(GetById), new { id = addedMeeting.Id }, meetingDtoResponse);
        }


        [HttpGet]
        public async Task<IActionResult> GetAllMeetings()
        {
            var meetings = await _repo.GetAllMeetingsAsync();
            var meetingDtos = _mapper.Map<List<MeetingDto>>(meetings);
            return Ok(meetingDtos);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var meeting = await _repo.GetMeetingByIdAsync(id);
            if (meeting == null)
            {
                return NotFound();
            }
            var meetingDto = _mapper.Map<MeetingDto>(meeting);
            return Ok(meetingDto);
        }

        [HttpGet("{meetingId}/attendees")]
        public async Task<IActionResult> GetAttendeesByMeetingId(int meetingId)
        {
            var attendeeEmails = await _attendeeRepo.GetAttendeesEmailsByMeetingIdAsync(meetingId);

            if (attendeeEmails == null || !attendeeEmails.Any())
            {
                return NotFound($"No attendees found for meeting ID {meetingId}.");
            }

            return Ok(attendeeEmails);
        }
        [HttpGet("meetings-by-attendee-email")]
        public async Task<IActionResult> GetMeetingsByAttendeeEmail([FromQuery] string email)
        {
            var meetings = await _attendeeRepo.GetMeetingsByAttendeeEmailAsync(email);
            if (meetings == null || !meetings.Any())
            {
                return NotFound("No meetings found for the provided attendee email.");
            }
            var meetingDtos = _mapper.Map<List<MeetingDto>>(meetings);
            return Ok(meetingDtos);
        }

        [HttpDelete("{meetingId}/attendee")]
        public async Task<IActionResult> RemoveAttendeeFromMeeting(int meetingId, [FromQuery] string email)
        {
            var user = await _adminUserRepo.GetUserByEmailAsync(email);
            if (user == null)
            {
                return NotFound($"User with email {email} not found.");
            }

            var attendee = await _attendeeRepo.GetMeetingAttendeeAsync(meetingId, user.Id);
            if (attendee == null)
            {
                return NotFound($"Attendee not found for meeting ID {meetingId}.");
            }

            await _attendeeRepo.RemoveAttendeeAsync(attendee);
            return Ok("Attendee removed successfully.");
        }
        [HttpGet("{meetingId}/non-attendees")]
        public ActionResult<IEnumerable<AdminUser>> GetNonAttendees(int meetingId)
        {
            var nonAttendees = _attendeeRepo.GetUsersNotInMeeting(meetingId);
            return Ok(nonAttendees);
        }

        [HttpPost("{meetingId}/attendees")]
        public IActionResult AddAttendeesToMeeting([FromBody] AddAttendeesRequestDto request)
        {
            if (_repo.AddAttendeesToMeeting(request.MeetingId, request.Emails))
            {
                return Ok("Attendees added successfully.");
            }
            return NotFound($"Meeting with ID {request.MeetingId} not found.");
        }

    }
}
