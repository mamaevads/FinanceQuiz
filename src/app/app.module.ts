import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { QandAComponent } from './qanda.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
 ],
  declarations: [ AppComponent, 
    QandAComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
