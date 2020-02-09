import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './reducers';
import { Component2 } from './component2/component2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component2
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      users : UserReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
