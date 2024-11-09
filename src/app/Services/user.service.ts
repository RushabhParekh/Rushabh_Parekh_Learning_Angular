import { Injectable } from '@angular/core';
import {User} from "../../shared/models/User";
import {user3} from "../../shared/data/mockUser";
import {catchError, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl ='api/user3';
  private users: User[]= user3;
  constructor(private http: HttpClient) { }
  getUser(): Observable<User[]> {
    console.log("Get user is working");
    return this.http.get<User[]>(this.apiUrl).pipe(catchError(this.handleError));
  }
  //getting item by id
  getUserById(id: string): Observable<User> {
    return  this.http.get<User>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError))
  }

  //adding item
  addStudent(student: User): Observable<User> {
    student.id = this.generateNewId();
    return this.http.post<User>(this.apiUrl, student).pipe(catchError(this.handleError));
  }

  updateStudent(student: User): Observable<User | undefined> {
    const url = `${this.apiUrl}/${student.id}`;
    return this.http.put<User>(url, student).pipe(catchError(this.handleError));
  }

  //deleting item
  deleteUser(id: number) : Observable <{}>{
  const apiUrl1=`${this.apiUrl}/${id}`;
  return this.http.delete(apiUrl1).pipe(catchError(this.handleError));
  }
  generateNewId(): number {
    return this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
  }
  private handleError(error: HttpErrorResponse){
    console.error("API error:", error);
    return throwError(()=> new Error('server error, please try again'));
  }
}
