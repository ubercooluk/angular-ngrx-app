import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importing the store
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './store/reducers';
import { TestComponent } from './components/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //Binding the store.The store contains only a single reducer
    StoreModule.forRoot({
      users : UserReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
