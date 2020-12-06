import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SessionService } from '../../core/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;
  logedInUserName: string;
  dialogRef: any;

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.initLocalStorage();
  }

  public initLocalStorage(): void {
    if (localStorage.getItem('userData')) {
      this.logedInUserName = JSON.parse(localStorage.getItem('userData')).name
    }
  }


  public logout(): void {
    this.sessionService.removeAll();
    this.router.navigate(['']);
    this.onNoClick();
  }


  public openLogoutDialog(): void {
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
