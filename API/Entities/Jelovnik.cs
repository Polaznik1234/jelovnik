namespace API.Entities
{
    public class Jelovnik
    {
        public int Id { get; set; }
        public required string Naziv { get; set; }
        public required string Razdoblje { get; set; }
        public required string Opis { get; set; }
    }
}
