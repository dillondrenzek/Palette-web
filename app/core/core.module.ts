import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { HttpModule }         from '@angular/http';
import { FormsModule }        from '@angular/forms';

import { ColorModule }        from '@palette/color';

import { AppComponent }         from './appComponent/app.component';
import { MainHeader }           from './mainHeader/mainHeader.component';
import { MainBody }             from './mainBody/mainBody.component';

import { MetaService }          from './metaService/meta.service';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    ColorModule
  ],
  declarations: [
    AppComponent,
    MainHeader,
    MainBody
  ],
  providers: [
    MetaService
  ],
  bootstrap:    [ AppComponent ]
})
export class CoreModule { }
