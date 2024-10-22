using API.Entities;

namespace API.DTOs
{
    public class JeloDto
    {
        public int Id { get; set; }
        public required string Naziv { get; set; }
        public required string Opis { get; set; }
        public required Jelovnik Jelovnik { get; set; }
    }
}
