import { Injectable } from '@angular/core';
import {User} from "../../shared/models/User";
import {user3} from "../../shared/data/mockUser";
import {catchError, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url ='api/items';
  private users: User[]= user3;
  constructor(private http: HttpClient) { }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(catchError(this.handleError));
  }
  //getting item by id
  getUserById(id: number): Observable<User> {
    return  this.http.get<User>(`${this.url}/${id}`).pipe(catchError(this.handleError))
  }

  //adding item
  addUser(newItem: User) : Observable <User>{
   newItem.id=this.generateNewId();
   return this.http.post<User>(this.url,newItem).pipe(catchError(this.handleError));
  }

  //updating item
  updateUser(updatedUser:User): Observable <User | undefined>{
    const url1 =`${this.url}/${updatedUser.id}`;
    return this.http.put<User>(url1,updatedUser).pipe(catchError(this.handleError));
  }

  //deleting item
  deleteUser(id: number) : Observable <{}>{
  const url1=`${this.url}/${id}`;
  return this.http.delete(url1).pipe(catchError(this.handleError));
  }
  generateNewId(): number {
    return this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
  }
  private handleError(error: HttpErrorResponse){
    console.error('API error:', error);
    return throwError(()=> new Error('server error, please try again'));
  }
}
