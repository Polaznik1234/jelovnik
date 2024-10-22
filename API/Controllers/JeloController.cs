using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JeloController(DataContext context, IMapper mapper) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JeloDto>>> GetJela()
        {
            try
            {
                var jela = await context.Jela.Include(j => j.Jelovnik).ToListAsync();
                if (jela == null) return NotFound();

                var jelaToReturn = mapper.Map<IEnumerable<JeloDto>>(jela);

                return Ok(jelaToReturn);
            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                               ex.Message);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<JeloDto>> GetJelo(int id)
        {
            try
            {
                var jelo = await context.Jela.Include(j => j.Jelovnik).FirstOrDefaultAsync(j => j.Id == id);
                if (jelo == null) return NotFound();

                return mapper.Map<JeloDto>(jelo);

            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                              ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Jelo>> Insert(JeloInsertDto jeloInsertDto)
        {
            try
            {
                var jelo = mapper.Map<Jelo>(jeloInsertDto);
                if(jeloInsertDto.JelovnikId != 0)
                {
                    var jelovnik = await context.Jelovnici.FindAsync(jeloInsertDto.JelovnikId);
                    if(jelovnik == null) return NotFound("Jelovnik nije pronađen");

                    jelo.Jelovnik = jelovnik;
                }

                context.Jela.Add(jelo);
                await context.SaveChangesAsync();

                return Ok(jelo);
            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                       ex.Message);
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteJelo(int id)
        {
            try
            {
                var jelo = await context.Jela.FindAsync(id);
                if(jelo != null)
                {
                    context.Jela.Remove(jelo);
                    context.SaveChanges();
                }
                else
                {
                    return NotFound();
                }

                return Ok();
            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> UpdateJelo(int id, JeloUpdateDto jeloUpdateDto)
        {
            try
            {
                var jelo = await context.Jela.Include(j => j.Jelovnik).FirstOrDefaultAsync(j => j.Id == id);
                if (jelo == null) return NotFound();

                mapper.Map(jeloUpdateDto, jelo);

                if(jeloUpdateDto.JelovnikId != 0)
                {
                    jelo.Jelovnik = await context.Jelovnici.FindAsync(jeloUpdateDto.JelovnikId);
                    if(jelo.Jelovnik == null)
                    {
                        return NotFound("Jelovnik nije pronađen");
                    }
                }

                context.Jela.Update(jelo);
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
