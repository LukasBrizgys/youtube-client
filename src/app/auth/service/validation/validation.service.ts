import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
class ValidationService {

  constructor() { }
  passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
      const value = control.value;
      if(!value) return null;
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasValidLength = value.length >= 8 ? true : false;
      const hasSpecialChar = /(?=.*?[#?!@$%^&*-])/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);
      if(hasUpperCase && hasValidLength && hasSpecialChar && hasLowerCase && hasNumeric) return null;
      return {
        passwordStrength : {
          hasUpperCase,
          hasValidLength,
          hasSpecialChar,
          hasLowerCase,
          hasNumeric
        }
      };
    }
  }
  urlValidator() : ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
      try{
        new URL(control.value);
        return null;
      }catch(e) {
        return {
          isUrlValid: false
        }
      }
    }
  }
  validFutureDateValidator() : ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {

        const regex : RegExp = /^\d{4}-\d{2}-\d{2}$/;
        const currentDate = new Date().getTime();
        const value = control.value;
        if(!value) return null;
        if(value.match(regex) && Date.parse(value) > currentDate) return null;
        return {
          isValidFutureDate: false
        }

      }

    }

}
export default ValidationService;
