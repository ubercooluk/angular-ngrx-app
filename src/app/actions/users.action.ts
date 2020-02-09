import { Action } from '@ngrx/store';
import { UserAdd } from '../models/users.model';

export enum UserActionTypes  {
  //add
  ADD_USER = '[USER] ADD',
  ADD_USER_SUCCESS = '[USER] ADD SUCCESS',
  ADD_USER_FAILED = '[USER] ADD FAILED',
  //delete
  DELETE_USER = '[USER] DELETE',
  DELETE_USER_SUCCESS = '[USER] DELETE SUCCESS',
  DELETE_USER_FAILED = '[USER] DELETE FAILED',
  //edit
  EDIT_USER = '[USER] EDIT',
  EDIT_USER_SUCCESS = '[USER] EDIT SUCCESS',
  EDIT_USER_FAILED = '[USER] EDIT FAILED',
}
export class AddUserAction implements Action {
  readonly type = UserActionTypes.ADD_USER;
  constructor(public payload : UserAdd) {

  }
}
export class DeleteUserAction implements Action {
  readonly type = UserActionTypes.DELETE_USER;
  constructor(public payload : string) {

  }
}

export class EditUserAction implements Action{
  readonly type = UserActionTypes.EDIT_USER
  constructor(public payload : string) {

  }
}

export type UserActions = AddUserAction | DeleteUserAction | EditUserAction;
