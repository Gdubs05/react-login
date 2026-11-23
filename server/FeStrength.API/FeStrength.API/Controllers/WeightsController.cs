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
            return Ok(new[] { 150, 155, 160});
        }
    }
}
