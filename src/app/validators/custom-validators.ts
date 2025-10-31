import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  
  // Custom validator to check if product name contains numbers
  static noNumbers(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null; // Don't validate empty values
    }
    
    const hasNumbers = /\d/.test(control.value);
    return hasNumbers ? { noNumbers: { value: control.value } } : null;
  }
  
  // Custom validator for minimum price with custom message
  static minimumPrice(minPrice: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      
      const price = parseFloat(control.value);
      return price < minPrice ? { minimumPrice: { requiredPrice: minPrice, actualPrice: price } } : null;
    };
  }
  
  // Custom validator for forbidden product names
  static forbiddenName(forbiddenNames: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      
      const isForbidden = forbiddenNames.some(name => 
        control.value.toLowerCase().includes(name.toLowerCase())
      );
      
      return isForbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
}