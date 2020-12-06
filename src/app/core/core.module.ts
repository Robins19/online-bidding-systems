import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTransferService, SessionService, SnackbarService } from './service';
import { AuthenticationGuard, PrivateAuthenticationGuard } from './guards';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DataTransferService,
    SessionService,
    AuthenticationGuard,
    PrivateAuthenticationGuard
  ],
})
export class CoreModule { }
