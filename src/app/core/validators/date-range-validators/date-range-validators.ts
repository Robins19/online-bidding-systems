

import {
    FormControl,
    ValidatorFn,
    ValidationErrors,
} from "@angular/forms";


export class DateRangeValidators {

    public static dateRange(
        siblingName: string
    ): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            if (control && control.parent) {
                const value = control.value;
                if (control.parent.controls[siblingName].value > value) {
                    return {
                        endDate: true,
                        label: "End Date must be greater than start date"
                    };
                }
            }
            return null;
        };
    }

}

