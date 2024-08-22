using Microsoft.AspNetCore.Mvc;

namespace Mjc.MoneyConverter.Server.Controllers
{
    public class MoneyConverterController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
