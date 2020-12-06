import {
    FormControl,
    ValidatorFn,
    ValidationErrors,
} from "@angular/forms";


export class MinvalueValidators {
    public static minValue(minValue: number, errorMessage?: string): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            const value = +control.value;
            if (!isNaN(value)) {
                if (value && (value < minValue)) {
                    return { minValue: minValue, label: errorMessage || '' };
                }
            }
            return null;
        };
    }
}

