using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using WorkshopAPI.Data;
using WorkshopAPI.Model.Domain;
using WorkshopAPI.Model.DTO;
using WorkshopAPI.Repository;

namespace WorkshopAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class WorkshopsController : ControllerBase
    {
        private IWorkshopRepository _repo;
    
        private IMapper _mapper;

        public WorkshopsController( IMapper mapper, IWorkshopRepository repo)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        async public Task<IActionResult> GetWorkshops([FromQuery] string? filterOn, [FromQuery] string? filterQuery, [FromQuery] string? sortBy, [FromQuery] bool? isAscending,
            [FromQuery] int pageNumber = 1, [FromQuery] int pageSize = 1000, [FromQuery] string _embed = "")
        {
            var workshopsDomain = await _repo.GetAllAsync(filterOn, filterQuery, sortBy, isAscending ?? false, pageNumber, pageSize, _embed);

            var workshopsDto = _mapper.Map<List<WorkshopDto>>(workshopsDomain);

            return Ok(workshopsDto);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var workshopDomain = await _repo.GetByIdAsync(id);

            if (workshopDomain == null)
            {
                return NotFound();
            }

            var workshopDto = _mapper.Map<WorkshopDto>(workshopDomain);

            return Ok(workshopDto);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AddWorkshopRequestDto addWorkshopRequestDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var workshopDomainModel = _mapper.Map<Workshop>(addWorkshopRequestDto);

            workshopDomainModel = await _repo.CreateAsync(workshopDomainModel);

            var workshopDto = _mapper.Map<WorkshopDto>(workshopDomainModel);

            return CreatedAtAction(nameof(GetById), new { id = workshopDto.Id }, workshopDto);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateWorkshopRequestDto updateWorkshopRequestDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var workshopDomainModel = _mapper.Map<Workshop>(updateWorkshopRequestDto);
            workshopDomainModel = await _repo.UpdateAsync(id, workshopDomainModel);

            if (workshopDomainModel == null)
            {
                return NotFound();
            }

            var workshopDto = _mapper.Map<WorkshopDto>(workshopDomainModel);

            return Ok(workshopDto);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var workshopDomainModel = await _repo.DeleteAsync(id);

            if (workshopDomainModel == null)
            {
                return NotFound();
            }

            // If you'd like, return the deleted Workshop model
            // var workshopDto = new WorkshopDto(workshopDomainModel);
            // return Ok(workshopDto);

            return Ok();
        }
    }
}
