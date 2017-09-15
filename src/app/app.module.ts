import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';

import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogDemoComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdDialogModule,
    MdCardModule,
    MdButtonModule
  ],
  entryComponents: [MyDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
