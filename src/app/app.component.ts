import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "../shared/models/User";
import {NgForOf, NgIf} from "@angular/common";
import {UserListComponent} from "./user-list/user-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user1 : User = {id: 1, firstName: "Rushabh", lastName: "Parekh",course: "Computer Programming", studentNo: 14567891,isAdmin: false};
  user2 : User = {id: 2, firstName: "Megh", lastName: "Patel",course: "Computer System Technician", studentNo: 62365,isAdmin: false};
  user3 : User = {id: 3, firstName: "Meetraj", lastName: "Cavda",course: "Computer Programming", studentNo: 2961465,isAdmin: false};
  user4 : User = {id: 4, firstName: "Shami", lastName: "Rathhod",course: "Computer Programming", studentNo: 2269465,isAdmin: false};
  user5 : User = {id: 5, firstName: "Virat", lastName: "Patel",course: "Computer Programming", studentNo: 23696465,isAdmin: false};
  user6 : User = {id: 6, firstName: "Mahendra", lastName: "Patel",course: "Civil Enginnering", studentNo: 256465,isAdmin: false};

//keeping the valuse in User list
  userList: User[]=[this.user1,this.user2,this.user3,this.user4,this.user5,this.user6]


}

