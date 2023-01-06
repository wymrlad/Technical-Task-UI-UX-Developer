import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosFormComponent } from './pos-form/pos-form.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';


// material
import {MatGridListModule} from '@angular/material/grid-list';

import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    PosFormComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,MatCardModule,MatGridListModule,
    BrowserAnimationsModule,MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
