import { Component } from '@angular/core';
import {User} from "../../shared/models/User";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {UserListItemComponent} from "../user-list-item/user-list-item.component";
import {user3} from "../../shared/data/mockUser";

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

  protected readonly user3 = user3;
}
