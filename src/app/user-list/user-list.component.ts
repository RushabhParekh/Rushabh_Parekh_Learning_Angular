import {Component, OnInit} from '@angular/core';
import {User} from "../../shared/models/User";
import {CurrencyPipe, LowerCasePipe, NgClass, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {UserListItemComponent} from "../user-list-item/user-list-item.component";
import {user3} from "../../shared/data/mockUser";
import {Router, RouterLink} from "@angular/router";
import {UserService} from "../Services/user.service";
import {StudentNamePipe} from "../pipes/student-name.pipe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {MatListModule} from "@angular/material/list";
import {MatButton, MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgForOf,
    UserListItemComponent,
    NgClass,
    NgIf,
    RouterLink,
    UpperCasePipe,
    CurrencyPipe,
    LowerCasePipe,
    StudentNamePipe,
    HoverHighlightDirective,
    MatListModule,
    MatButtonModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  user3: User[]=[];
  error:string |null=null;

  constructor(private userService: UserService,private router:Router) {
  }

  list : User[] = user3;
   ngOnInit(){
    //This lifecycle hook is a good place to fetch and init our data
    this.userService.getUser().subscribe({
      next: (data: User[]) => {
         this.user3=data;
         this.error=null
       },
       error: err => {
         this.error = 'Error fetching User';
         console.error("Error fetching User",err);
       },
       complete:() => console.log("User data fetch complete!")
     });

   }
  delete(id: number):void{
    this.list = this.list.filter(user => user.id !== id);
  }
  edit(id:number):void{
    this.router.navigate(['modify-list-item',id])
  }
}
