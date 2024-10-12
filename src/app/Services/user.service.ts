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
    return of (user3);
  }
  //getting item by id
  getItemById(id: number): Observable<User | undefined> {
    const item = this.users.find(user => user.id === id);
    return of(item);
  }

  //adding item
  addItem(newItem: User) : Observable <User[]>{
    this.users.push(newItem)
    return of (this.users);
  }

  //updating item
  updateItem(updatedItem:User): Observable <User[]>{
    const index = this.users.findIndex(user => user.id !== updatedItem.id);
    if(index !== -1){
      this.users[index]=updatedItem;
    }
    return of(this.users);
  }

  //deleting item
  deleteItem(itemId: number) : Observable <User[]>{
    this.users = this.users.filter(user => user.id !== itemId);
    return of (this.users);
  }
}
