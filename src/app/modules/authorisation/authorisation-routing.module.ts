import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../../core/guards';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [AuthenticationGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthorisationRoutingModule {
    constructor() { }
}
