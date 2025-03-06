using AutoMapper;
using MeetingApi.DTO;
using MeetingApi.Model.Domain;

namespace MeetingApi.Mappings
{
    public class AutomapperProfiles : Profile
    {
        public AutomapperProfiles()
        {
            CreateMap<Meeting, MeetingDto>();
            CreateMap<AddMeetingRequestDto, Meeting>();
            CreateMap<AdminUser, AdminUserDto>();
        }
    }
}
