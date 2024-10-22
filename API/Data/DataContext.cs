using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Jelovnik> Jelovnici { get; set; }
        public DbSet<Jelo> Jela {  get; set; }
    }
}
