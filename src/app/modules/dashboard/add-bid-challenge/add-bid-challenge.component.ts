import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { DateRangeValidators } from '../../../core/validators';
import { DataTransferService } from '../../../core/service';
// import moment from 'moment';
@Component({
  selector: 'app-add-bid-challenge',
  templateUrl: './add-bid-challenge.component.html',
  styleUrls: ['./add-bid-challenge.component.scss']
})
export class AddBidChallengeComponent implements OnInit {
  addChallengeForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private dataTransferService: DataTransferService
  ) { }

  ngOnInit(): void {
    this.initAddChallengeForm();
  }


  private initAddChallengeForm(): void {
    this.addChallengeForm = this.fb.group({
      name: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required, DateRangeValidators.dateRange("startTime")]],
    })
  }

  public onAddNewBid(): void {
    if (this.addChallengeForm.invalid) {
      return;
    } else {
      const addNewChallengeData = {
        id: 13,
        startTime: this.addChallengeForm.controls.startTime.value ? moment(this.addChallengeForm.controls.startTime.value).format("DD/MM/YYYY") : '',
        endTime: this.addChallengeForm.controls.endTime.value ? moment(this.addChallengeForm.controls.endTime.value).format("DD/MM/YYYY") : '',
        status: 1,
        bidId: 13,
        images: '',
        name: this.addChallengeForm.controls.name.value ? this.addChallengeForm.controls.name.value : 'Challenge13'
      }
      this.dataTransferService.sendAddChallengeData(addNewChallengeData)
    }
  }

  public onClosedDrawer(): void {
    this.dataTransferService.sendDrawerClosedStatus(true)
  }

}
