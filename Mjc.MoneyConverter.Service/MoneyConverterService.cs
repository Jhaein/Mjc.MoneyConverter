
using Mjc.MoneyController.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Reflection.Metadata;

namespace Mjc.MoneyConverter.Service
{
    public class MoneyConverterService : IMoneyConverterService
    {
        public async Task<MoneyConverterModel> GetMoneyToWords(decimal amount, CancellationToken cancellationToken)
        {
            var convertedAmount = await ConvertMoneyToWords(amount, cancellationToken);
            return new MoneyConverterModel()
            {
                Money = amount,
                Words = convertedAmount
            };
        }


        private async Task<string> ConvertMoneyToWords(decimal number, CancellationToken cancellationToken)
        {
                return await ConvertMoneyToWords(number, cancellationToken);
            
        }
    }
}
