import { Component } from '@angular/core';
import {User} from "../../shared/models/User";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {UserListItemComponent} from "../user-list-item/user-list-item.component";
import {user3} from "../../shared/data/mockUser";
import {Router} from "@angular/router";

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

  constructor(private router:Router) {
  }
}
