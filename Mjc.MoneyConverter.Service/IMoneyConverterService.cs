using Mjc.MoneyConverter.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mjc.MoneyConverter.Service
{
    public interface IMoneyConverterService
    {
        Task<MoneyConverterModel> GetAmountToWords(decimal amount, CancellationToken cancellationToken);
    }
}
