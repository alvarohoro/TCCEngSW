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
    [Route("api/[controller]")]
    [ApiController]
    public class DAController : ControllerBase
    {
        private readonly FL410Context _context;

        public DAController(FL410Context context)
        {
            _context = context;
        }

        // GET: api/DA
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DA>>> GetDAs()
        {
            return await _context.DAs.ToListAsync();
        }

        // GET: api/DA/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DA>> GetDA(Guid id)
        {
            var dA = await _context.DAs.FindAsync(id);

            if (dA == null)
            {
                return NotFound();
            }

            return dA;
        }

        // PUT: api/DA/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDA(Guid id, DA dA)
        {
            if (id != dA.Id)
            {
                return BadRequest();
            }

            _context.Entry(dA).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DAExists(id))
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

        // POST: api/DA
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DA>> PostDA(DA dA)
        {
            _context.DAs.Add(dA);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDA", new { id = dA.Id }, dA);
        }

        // DELETE: api/DA/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDA(Guid id)
        {
            var dA = await _context.DAs.FindAsync(id);
            if (dA == null)
            {
                return NotFound();
            }

            _context.DAs.Remove(dA);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DAExists(Guid id)
        {
            return _context.DAs.Any(e => e.Id == id);
        }
    }
}
