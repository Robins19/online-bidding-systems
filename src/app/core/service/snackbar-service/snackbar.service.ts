import { Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    horizontalPosition: MatSnackBarHorizontalPosition = 'start';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    constructor(private _snackBar: MatSnackBar) { }

    openSnackBar(message) {
        this._snackBar.open(message, '', {
            duration: 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
}
