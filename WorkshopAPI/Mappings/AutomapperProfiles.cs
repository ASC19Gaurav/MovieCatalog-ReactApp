using AutoMapper;
using WorkshopAPI.Model.Domain;
using WorkshopAPI.Model.DTO;

namespace WorkshopAPI.Mappings
{
    public class AutomapperProfiles:Profile
    {
        public AutomapperProfiles() {
            CreateMap<Workshop, WorkshopDto>().ReverseMap();
            CreateMap<Session, SessionDto>().ReverseMap();
            CreateMap<Session, WorkshopSessionDto>().ReverseMap();
        }

    }
}
