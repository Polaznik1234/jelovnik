using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles() 
        {
            CreateMap<Jelovnik, JelovnikDto>();
            CreateMap<JelovnikDto, Jelovnik>();
            CreateMap<JelovnikInsertDto, Jelovnik>();
            CreateMap<JelovnikUpdateDto, Jelovnik>();
            CreateMap<Jelo, JeloDto>();
            CreateMap<JeloDto, Jelo>();
            CreateMap<JeloInsertDto, Jelo>();
            CreateMap<JeloUpdateDto, Jelo>();
        }
    }
}
