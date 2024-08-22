using Microsoft.AspNetCore.Mvc;
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

    }
}
