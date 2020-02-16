import { UserAdd} from '../models/users.model';
import {UserActions, UserActionTypes} from '../actions/users.action'

//initial store data
const initialState : Array<UserAdd> = [
  {
    id : "123-456-789",
    name : "John doe",
    age : 32,
    address : "Hello world",
    email : "something@gmail.com"
  }

]
// The only reducer we are using for this example
export function UserReducer(state: Array<UserAdd> = initialState,action :UserActions){
    switch(action.type) {
      case UserActionTypes.ADD_USER :
       return [...state,action.payload];
      case UserActionTypes.DELETE_USER:
        return state.filter(item => item.id !== action.payload);
       default:
         return state;
    }
};

