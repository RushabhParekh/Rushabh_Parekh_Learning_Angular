import {Component, Input} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-user-list-item',
  standalone: true,
  imports: [],
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.css'
})
export class UserListItemComponent {
@Input() IsAdmin?:User;
}
