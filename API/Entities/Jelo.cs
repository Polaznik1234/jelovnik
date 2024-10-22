namespace API.Entities
{
    public class Jelo
    {
        public int Id { get; set; }
        public required string Naziv { get; set; }
        public required string Opis { get; set; }
        public required Jelovnik Jelovnik { get; set; }
    }
}
