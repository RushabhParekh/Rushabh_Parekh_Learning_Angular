import {Component, Input} from '@angular/core';
import {User} from "../../shared/models/User";

@Component({
  selector: 'app-user-list-item',
  standalone: true,
  imports: [],
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.css'
})
export class UserListItemComponent {
  @Input() User?: User;
}
