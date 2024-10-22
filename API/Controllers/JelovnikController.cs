using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JelovnikController(DataContext context, IMapper mapper) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JelovnikDto>>> GetJelovnike()
        {
            try
            {
                var jelovnici = await context.Jelovnici.ToListAsync();
                if (jelovnici == null) return NotFound();

                var jelovniciToReturn = mapper.Map<IEnumerable<JelovnikDto>>(jelovnici);

                return Ok(jelovniciToReturn);

            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                            ex.Message);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<JelovnikDto>> GetJelovnik(int id)
        {
            try
            {
                var jelovnik = await context.Jelovnici.FirstOrDefaultAsync(j => j.Id == id);
                if(jelovnik == null) return NotFound();

                return mapper.Map<JelovnikDto>(jelovnik);

            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                             ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Jelovnik>> Insert(JelovnikInsertDto jelovnikInsertDto)
        {
            try
            {
                var jelovnik = mapper.Map<Jelovnik>(jelovnikInsertDto);
                context.Jelovnici.Add(jelovnik);
                await context.SaveChangesAsync();

                return Ok(jelovnik);
            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                       ex.Message);
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteJelovnik(int id)
        {
            try
            {
                var jelovnik = await context.Jelovnici.FindAsync(id);
                if (jelovnik == null) return NotFound();

                context.Jelovnici.Remove(jelovnik);
                context.SaveChanges();

                return Ok();
            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> UpdateJelovnik(int id, JelovnikUpdateDto jelovnikUpdateDto)
        {
            try
            {
                var jelovnik = await context.Jelovnici.FirstOrDefaultAsync(j => j.Id == id);
                if (jelovnik == null) return NotFound();
                mapper.Map(jelovnikUpdateDto, jelovnik);

                context.Jelovnici.Update(jelovnik);
                await context.SaveChangesAsync();

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }
     }
}
