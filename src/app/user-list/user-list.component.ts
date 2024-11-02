import { Component } from '@angular/core';
import {User} from "../../shared/models/User";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {UserListItemComponent} from "../user-list-item/user-list-item.component";
import {user3} from "../../shared/data/mockUser";
import {Router} from "@angular/router";
import {UserService} from "../Services/user.service";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgForOf,
    UserListItemComponent,
    NgClass
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  user3: User[]=[];

  constructor(private userService: UserService,private router:Router) {
  }
  ngOnInit(){
    //This lifecycle hook is a good place to fetch and init our data
    this.userService.getUser().subscribe({
      next: (data: User[]) => this.user3 = data,
      error:err => console.error("Error fetching Students", err),
      complete:() => console.log("Student data fetch complete!")
    })

  }
  delete(id: Number):void{
    this.user3=this.user3.filter(user => user.id!==id);
  }
  edit():void{
    this.router.navigate(['modify-list-item'])
  }
}
