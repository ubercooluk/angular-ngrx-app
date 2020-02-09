import { Component , OnInit} from '@angular/core';
import { AppState } from './models/app.model';
import {UserAdd } from './models/users.model';
import { DeleteUserAction, AddUserAction} from './actions/users.action'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   showadd = false;
  userslist: Observable<Array<UserAdd>>;
  userinput = {
    name :'',
    age:0,
    email:'',
    address:'',
    id :''
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.userslist = this.store.select(store => store.users);

  }
  toggleUser() {
    this.showadd = !this.showadd;
  }
  saveUser() {
    this.userinput.id = uuid();
    this.store.dispatch(new AddUserAction(this.userinput));
    this.userinput = {
      name :'',
      age:0,
      email:'',
      address:'',
      id :uuid()
    }
  }
  deleteUser(id){
    this.store.dispatch(new DeleteUserAction(id));
  }
}
