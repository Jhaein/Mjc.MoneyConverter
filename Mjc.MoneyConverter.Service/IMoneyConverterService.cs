
using Mjc.MoneyController.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mjc.MoneyConverter.Service
{
    public interface IMoneyConverterService
    {
        Task<MoneyConverterModel> GetMoneyToWords(decimal amount, CancellationToken cancellationToken);
    }
}
