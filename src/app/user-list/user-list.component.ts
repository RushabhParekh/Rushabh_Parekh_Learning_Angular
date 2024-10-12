import { Component } from '@angular/core';
import {User} from "../../shared/models/User";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {UserListItemComponent} from "../user-list-item/user-list-item.component";

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
  user1 : User = {id: 1, firstName: "Rushabh", lastName: "Parekh",course: "Computer Programming", studentNo: 14567891,isAdmin: false};
  user2 : User = {id: 2, firstName: "Megh", lastName: "Patel",course: "Computer System Technician", studentNo: 62365,isAdmin: false};
  user3 : User = {id: 3, firstName: "Meetraj", lastName: "Cavda",course: "Computer Programming", studentNo: 2961465,isAdmin: false};
  user4 : User = {id: 4, firstName: "Shami", lastName: "Rathhod",course: "Computer Programming", studentNo: 2269465,isAdmin: false};

//keeping the valuse in User list
  userList: User[]=[this.user1,this.user2,this.user3,this.user4]

}
