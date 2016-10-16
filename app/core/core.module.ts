import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { AppComponent }         from './appComponent/app.component';
import { MainHeader }           from './mainHeader/mainHeader.component';
import { MainBody }             from './mainBody/mainBody.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    MainHeader,
    MainBody
  ],
  bootstrap:    [ AppComponent ]
})
export class CoreModule { }
