import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const modules = [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

];

@NgModule({
    imports: modules,
    exports: modules
})
export class AuthorisationMaterialsModule { }