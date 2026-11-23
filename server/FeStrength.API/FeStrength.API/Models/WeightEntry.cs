namespace FeStrength.API.Models
{
    public class WeightEntry
    {
        public int Id { get; set; }
        public decimal Weight { get; set; }

        public decimal BodyFat { get; set; }

        public DateTime Date { get; set; }
    }
}
