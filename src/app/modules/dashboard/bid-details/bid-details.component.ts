import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IBidItem } from '../../../core/interface';
import { DataTransferService } from '../../../core/service';
import { BidStatus } from '../../../core/enums';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MinvalueValidators } from '../../../core/validators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bid-details',
  templateUrl: './bid-details.component.html',
  styleUrls: ['./bid-details.component.scss']
})
export class BidDetailsComponent implements OnInit {
  bidForm: FormGroup;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'basePrice', 'status', 'bidPrice'];
  bidItems: IBidItem[] = [
    { id: 1, name: 'Bid Item', basePrice: 10, status: 1, bidPrice: 0 }
  ]
  itemStatus: number = 1;
  public bidChallengeStatus = BidStatus;
  dialogRef: any;
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initRouterParams();
    this.initBidForm();
  }


  public initRouterParams(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.itemStatus = parseInt(params.get('id'));
        if (this.bidItems && this.bidItems.length) {
          this.bidItems.map((items) => {
            items.status = parseInt(params.get('id'));
          })
        }
      }
    });
    this.dataSource = new MatTableDataSource<any>(this.bidItems);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  private initBidForm(): void {
    this.bidForm = this.fb.group({
      bidPrice: [20, [Validators.required, MinvalueValidators.minValue(20)]],
    })
  }

  public onSubmitBidForm(): void {
    if (this.bidItems && this.bidItems.length) {
      this.bidItems.map((items) => {
        items.bidPrice = this.bidForm.controls.bidPrice.value;

      })
    }
    this.onNoClick();
    this.initRouterParams();
  }

  public openBidDialog(): void {
    this.dialogRef = this.dialog.open(this.callAPIDialog, {
      panelClass: 'custom-dialog-container',
      width: '400px',
      height: '200px'
    });
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
