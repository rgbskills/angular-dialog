import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material'
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent implements OnInit {

  dialogResult = "";

  constructor(public Dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.Dialog.open(MyDialogComponent, {
      width: "600px",
      data: "This text is passed in to the dialog"
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('Dialog Closed: $(result)');
      this.dialogResult = result;
    })
  }

}
