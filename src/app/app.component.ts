import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {User} from "../shared/models/User";
import {NgForOf, NgIf} from "@angular/common";
import {UserListComponent} from "./user-list/user-list.component";
import {UserListItemComponent} from "./user-list-item/user-list-item.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, UserListComponent, UserListItemComponent, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="User List"


}

