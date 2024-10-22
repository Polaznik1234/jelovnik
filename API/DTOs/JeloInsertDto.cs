namespace API.DTOs
{
    public class JeloInsertDto
    {
        public required string Naziv { get; set; }
        public required string Opis { get; set; }
        public required int JelovnikId { get; set; } // FK
    }
}
