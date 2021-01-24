import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxQuestionaireFormModule } from '@iresa/ngx-questionaire-form';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, NgxQuestionaireFormModule, MatRadioModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
