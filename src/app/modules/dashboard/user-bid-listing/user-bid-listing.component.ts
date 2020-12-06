import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../../core/service';
import { BidStatus } from '../../../core/enums';
import { IBidChallenge } from '../../../core/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-bid-listing',
  templateUrl: './user-bid-listing.component.html',
  styleUrls: ['./user-bid-listing.component.scss']
})
export class UserBidListingComponent implements OnInit {
  allChallengeBidList: IBidChallenge[] = [
    { id: 1, startTime: '2020-10-15', endTime: '2020-10-15', status: 1, bidId: 1, name: 'Challenge 1', images: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop' },
    { id: 2, startTime: '2020-10-15', endTime: '2021-10-15', status: 1, bidId: 2, name: 'Challenge 2', images: 'https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop' },
    { id: 3, startTime: '2020-12-15', endTime: '2021-10-15', status: 1, bidId: 3, name: 'Challenge 3', images: "https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop" },
    { id: 4, startTime: '2020-02-15', endTime: '2020-10-15', status: 1, bidId: 4, name: 'Challenge 4', images: "https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop" },
    { id: 5, startTime: '2020-10-15', endTime: '2022-10-15', status: 1, bidId: 5, name: 'Challenge 5', images: "https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" },
    { id: 6, startTime: '2021-10-15', endTime: '2022-10-15', status: 1, bidId: 6, name: 'Challenge 6', images: "https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop" },
    { id: 7, startTime: '2020-03-15', endTime: '2020-10-15', status: 1, bidId: 7, name: 'Challenge 7', images: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop' },
    { id: 8, startTime: '2020-10-15', endTime: '2024-10-15', status: 1, bidId: 8, name: 'Challenge 8', images: 'https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop' },
    { id: 9, startTime: '2024-10-15', endTime: '2030-10-15', status: 1, bidId: 9, name: 'Challenge 9', images: "https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop" },
    { id: 10, startTime: '2020-11-15', endTime: '2020-12-04', status: 1, bidId: 10, name: 'Challenge 10', images: "https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop" },
    { id: 11, startTime: '2020-10-15', endTime: '2030-10-15', status: 1, bidId: 11, name: 'Challenge 11', images: "https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" },
    { id: 12, startTime: '2025-10-15', endTime: '2030-10-15', status: 1, bidId: 12, name: 'Challenge 12', images: "https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop" },
  ]
  public bidChallengeStatus = BidStatus;
  constructor(
    private dataTransferService: DataTransferService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.fetchingAllChallengeListData();
  }


  private fetchingAllChallengeListData(): void {
    if (this.allChallengeBidList && this.allChallengeBidList.length) {

      this.allChallengeBidList.map((items) => {

        if (new Date(items.startTime) <= new Date() && new Date(items.endTime) >= new Date()) {
          items.status = 1;
        } else if (new Date(items.endTime) < new Date()) {
          items.status = 3;
        } else {
          items.status = 2;
        }
      })
    }
  }

  public onClickBidItems(bidStatus): void {
    this.dataTransferService.sendBidItemStatus(bidStatus);
    this.router.navigate(['/dashboard/bid-details', bidStatus]);
  }
}
