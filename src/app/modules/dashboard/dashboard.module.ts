import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { DashboardComponent } from './dashboard.component';
import { BidListingComponent } from './bid-listing/bid-listing.component';
import { UserBidListingComponent } from './user-bid-listing/user-bid-listing.component';
import { BidDetailsComponent } from './bid-details/bid-details.component';
import { AdminBidListingComponent } from './admin-bid-listing/admin-bid-listing.component';
import { AddBidChallengeComponent } from './add-bid-challenge/add-bid-challenge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMaterialModule } from './dashboard-materials.module';



@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    BidListingComponent,
    UserBidListingComponent,
    BidDetailsComponent,
    AdminBidListingComponent,
    AddBidChallengeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardMaterialModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
