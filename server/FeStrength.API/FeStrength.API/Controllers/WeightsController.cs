using FeStrength.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FeStrength.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class WeightsController : ControllerBase
    {

        [HttpGet]
        public IActionResult GetWeights()
        {
            return Ok(new[]
                        {
                            new WeightEntry
                            {
                                Id = 1,
                                Weight = 160m,
                                BodyFat = 13.2m,
                                Date = new DateTime(2026, 11, 11)
                            },
                            new WeightEntry
                            {
                                Id = 2,
                                Weight = 170m,
                                BodyFat = 13.2m,
                                Date = new DateTime(2026, 11, 12)
                            },
                            new WeightEntry
                            {
                                Id = 3,
                                Weight = 180m,
                                BodyFat = 13.2m,
                                Date = new DateTime(2026, 11, 13)
                            },

                        }
                    );
        }
    }
}
