import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthorisationRoutingModule } from './authorisation-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorisationMaterialsModule } from './authorisation-materials.module';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthorisationRoutingModule,
    AuthorisationMaterialsModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AuthorisationModule { }
