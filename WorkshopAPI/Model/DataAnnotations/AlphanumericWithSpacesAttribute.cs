using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace WorkshopAPI.Model.DataAnnotations
{
    public class AlphanumericWithSpacesAttribute : ValidationAttribute
    {
        private const string Pattern = @"^[A-Za-z0-9 ]*$";
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value != null && string.IsNullOrEmpty(value.ToString()))
            {
                return ValidationResult.Success;
            }
            if (Regex.IsMatch(value.ToString(), Pattern))
            {
                return ValidationResult.Success;
            }

            // How the "null coalescing" operator "??"" behaves...
            // string result = ErrorMessage != null ? ErrorMessage : $"{validationContext.DisplayName} can only have letters, digitsd and spaces"
            return new ValidationResult(ErrorMessage ?? $"{validationContext.DisplayName} can only have letters, digits and spaces");
        }
    }
}
