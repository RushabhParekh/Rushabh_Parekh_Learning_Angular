import {Component, Input} from '@angular/core';
import {User} from "../../shared/models/User";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../Services/user.service";
import {user3} from "../../shared/data/mockUser";
import {CurrencyPipe, LowerCasePipe, NgIf, UpperCasePipe} from "@angular/common";
import {StudentNamePipe} from "../pipes/student-name.pipe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {MatCardModule} from "@angular/material/card";




@Component({
  selector: 'app-user-list-item',
  standalone: true,
  imports: [
    NgIf,
    CurrencyPipe,
    LowerCasePipe,
    UpperCasePipe,
    StudentNamePipe,
    HoverHighlightDirective,
    MatCardModule
  ],
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.css'
})
export class UserListItemComponent {
  student: User | undefined; //The student to display
  userList: User[] = [];// to store the list of students
  currentIndex: number = 0;//to track the current index
  error: string|null = null;//to store any errors

  constructor(
    private route: ActivatedRoute,
    private studentService: UserService,
    private router: Router
  ) {}
//rewrite onInit to get the list of students and the current student
  ngOnInit(): void {
    this.studentService.getUser().subscribe({
      next: (users: User[]) => {
        this.userList = users;
        this.error = null; // Clear any previous errors

        // Subscribe to paramMap changes to update the page view
        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.userList.findIndex(user => user.id === id);
            this.student = this.userList[this.currentIndex];
          }
        });
      },
      error: (err) => {
        this.error = 'Error fetching students';
        console.error('Error fetching students:', err);
      }
    });
  }


}
