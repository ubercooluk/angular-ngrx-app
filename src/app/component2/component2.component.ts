import { Component , OnInit} from '@angular/core';
import { AppState } from '../models/app.model';
import {UserAdd } from '../models/users.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
@Component({
  selector: 'component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.sass']
})
export class Component2 implements OnInit {
  userslist: Observable<Array<UserAdd>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.userslist = this.store.select(store => store.users);
  }
}
