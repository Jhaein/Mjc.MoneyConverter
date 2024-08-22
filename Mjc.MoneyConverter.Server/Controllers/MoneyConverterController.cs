using Microsoft.AspNetCore.Mvc;
using Mjc.MoneyConverter.Models;
using Mjc.MoneyConverter.Service;

namespace Mjc.MoneyConverter.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoneyConverterController : ControllerBase
    {
        //private readonly ILogger<MoneyConverterController> _logger;
        private readonly IMoneyConverterService _moneyConverterService;
        public MoneyConverterController(ILogger<MoneyConverterController> logger,
            IMoneyConverterService moneyConverterService)
        {
             //_logger = logger;
            _moneyConverterService = moneyConverterService;
        }

        [HttpGet]
        [Route("api/ConvertMoneyToWords/{money}")]
        public async Task<ActionResult<MoneyConverterModel>> ConvertToWords(decimal money, CancellationToken cancellationToken)
        {
            return Ok(await _moneyConverterService.GetAmountToWords(money, cancellationToken));
        }
    }
}
