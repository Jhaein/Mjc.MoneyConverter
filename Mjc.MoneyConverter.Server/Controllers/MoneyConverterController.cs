using Microsoft.AspNetCore.Mvc;
using Mjc.MoneyController.Models;
using Mjc.MoneyConverter.Service;

namespace Mjc.MoneyConverter.Server.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class MoneyConverterController : ControllerBase
    {
        private readonly IMoneyConverterService _moneyConverterService;
        public MoneyConverterController(ILogger<MoneyConverterController> logger,IMoneyConverterService moneyConverterService)
        {
            _moneyConverterService = moneyConverterService;
        }


        [HttpGet]
        [Route("api/ConvertMoneyToWords/{money}")]
        public async Task<ActionResult<MoneyConverterModel>> ConvertToWords(decimal money, CancellationToken cancellationToken)
        {
            return Ok(await _moneyConverterService.GetMoneyToWords(money, cancellationToken));
        }
    }
}
