import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateAuthenticationGuard } from '../../core/guards';
import { BidDetailsComponent } from './bid-details/bid-details.component';
import { BidListingComponent } from './bid-listing/bid-listing.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [PrivateAuthenticationGuard],
        children: [
            {
                path: '',
                component: BidListingComponent,
            },
            {
                path: 'bid-details/:id',
                component: BidDetailsComponent,
            },

            {
                path: '**',
                component: BidListingComponent
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {
    constructor() { }
}
