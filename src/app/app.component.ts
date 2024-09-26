import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "../models/User";
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

}

