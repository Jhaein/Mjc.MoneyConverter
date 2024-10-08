﻿using Mjc.MoneyConverter.Models;

namespace Mjc.MoneyConverter.Service
{
    public class MoneyConverterService : IMoneyConverterService
    {

        public async Task<MoneyConverterModel> GetAmountToWords(decimal amount, CancellationToken cancellationToken)
        {
            var convertedAmount = await ConvertAmountToWords(amount, cancellationToken);
            return new MoneyConverterModel()
            {
                Money = amount,
                Words = convertedAmount
            };
        }


        private async Task<string> ConvertAmountToWords(decimal amount, CancellationToken cancellationToken)
        {
            if (amount < 0 || amount > 999999999.99m)
                throw new ArgumentOutOfRangeException("Amount must be between 0 and 999,999,999.99");

            int dollars = (int)amount;
            int cents = (int)((amount - dollars) * 100);


            var tasks = new[] { ConvertToWords(dollars, cancellationToken), ConvertToWords(cents, cancellationToken) };
            var results = await Task.WhenAll(tasks);


            string result = $"{results[0]} dollars";

            if (!string.IsNullOrEmpty(results[1]))
                result += $" and {results[1]} cents";

            return result;
        }


        private async Task<string> ConvertToWords(int number, CancellationToken cancellationToken)
        {
            return number switch
            {
                0 => "Zero",
                < 10 => Constant.Ones[number],
                < 20 => Constant.Teens[number - 10],
                < 100 => $"{Constant.Tens[number / 10]} {Constant.Ones[number % 10]}".Trim(),
                < 1000 => $"{Constant.Ones[number / 100]} Hundred {await ConvertToWords(number % 100, cancellationToken)}".Trim(),
                < 1000000 => $"{await ConvertToWords(number / 1000, cancellationToken)} Thousand {await ConvertToWords(number % 1000, cancellationToken)}".Trim(),
                _ => $"{await ConvertToWords(number / 1000000, cancellationToken)} Million {await ConvertToWords(number % 1000000, cancellationToken)}".Trim()
            };
        }


    }
}
