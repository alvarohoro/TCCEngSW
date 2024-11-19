using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FL410.API.Data;
using FL410.Business.Models.Documentos;

namespace FL410.API.Controllers.ANAC
{
    [Route("api/ANAC/DA/Fabricante")]
    [ApiController]
    public class DAFabricanteController : ControllerBase
    {
        private readonly FL410Context _context;

        public DAFabricanteController(FL410Context context)
        {
            _context = context;
        }

        // GET: api/DAFabricante
        [HttpGet]
        public async Task<ActionResult<Fabricante>> GetFabricante()
        {
            return Ok(await _context.DA_Fabricantes.ToListAsync());
        }

        // GET: api/DAFabricante/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Fabricante>> GetFabricante(Guid id)
        {
            var fabricante = await _context.DA_Fabricantes.FindAsync(id);

            if (fabricante == null)
            {
                return NotFound();
            }

            return fabricante;
        }

        // PUT: api/DAFabricante/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFabricante(Guid id, Fabricante fabricante)
        {
            if (id != fabricante.Id)
            {
                return BadRequest();
            }

            _context.Entry(fabricante).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FabricanteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DAFabricante
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Fabricante>> PostFabricante(Fabricante fabricante)
        {
            _context.DA_Fabricantes.Add(fabricante);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFabricante", new { id = fabricante.Id }, fabricante);
        }

        [HttpPost]
        [Route("Batch")]
        public async Task<ActionResult<Fabricante>> PostFabricantes(List<Fabricante> fabricantes)
        {
            _context.DA_Fabricantes.AddRange(fabricantes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFabricante", fabricantes);
        }

        // DELETE: api/DAFabricante/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFabricante(Guid id)
        {
            var fabricante = await _context.DA_Fabricantes.FindAsync(id);
            if (fabricante == null)
            {
                return NotFound();
            }

            _context.DA_Fabricantes.Remove(fabricante);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FabricanteExists(Guid id)
        {
            return _context.DA_Fabricantes.Any(e => e.Id == id);
        }
    }
}
