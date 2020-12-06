import { Component, OnInit } from '@angular/core';
import { Role } from '../../../core/enums';
import { DataTransferService } from '../../../core/service';

@Component({
  selector: 'app-bid-listing',
  templateUrl: './bid-listing.component.html',
  styleUrls: ['./bid-listing.component.scss']
})
export class BidListingComponent implements OnInit {
  userType: number;
  public logedInUserRole = Role

  constructor(
    private dataTransferService: DataTransferService,
  ) { }

  ngOnInit(): void {
    this.initLocalStorage();
  }

  public initLocalStorage(): void {
    if (localStorage.getItem('userData')) {
      this.userType = JSON.parse(localStorage.getItem('userData')).userType
    }
  }
}
