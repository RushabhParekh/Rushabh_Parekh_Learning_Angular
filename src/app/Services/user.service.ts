import { Injectable } from '@angular/core';
import {User} from "../../shared/models/User";
import {user3} from "../../shared/data/mockUser";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[]= user3;
  constructor() { }
  getUser(): Observable<User[]> {
    return of (this.users);
  }
  //getting item by id
  getUserById(id: number): Observable<User | undefined> {
    return of(this.users.find(user => user.id === id));
  }

  //adding item
  addUser(newItem: User) : Observable <User>{
    this.users.push(newItem)
    return of (newItem);
  }

  //updating item
  updateUser(updatedUser:User): Observable <User | undefined>{
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if(index > -1){
      this.users[index]=updatedUser;
      return of(updatedUser)
    }
    return of(undefined);
  }

  //deleting item
  deleteUser(id: number) : Observable <User[]>{
    this.users = this.users.filter(user => user.id !== id);
    return of (this.users);
  }
  generateNewId(): number {
    return this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
  }
}
