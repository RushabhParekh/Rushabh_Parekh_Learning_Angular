import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../shared/models/User";
import {UserService} from "../Services/user.service";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit{
  userForm: FormGroup;
  user: User | undefined;
  error: string|null=null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      id: [userService.generateNewId()], //ID is required
      firstName: ['', Validators.required],//First name is required
      lastName: ['', Validators.required],
      studentNo: [''],
      course: [''],
      isAdmin: [false]
    });
  }
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.userService.getUserById(id).subscribe( {
          next: user=>{
            if(user){
              this.userForm.patchValue(user);
            }
          },
          error: err=>{
            this.error='Error';
            console.error('error fetching',err)
          }
        });
      }
    }
  onSubmit(): void {
    const user: User = this.userForm.value;

    // Check if we're updating an existing student
    if (user.id) {
      this.userService.updateUser(user);
    }
    else
    {
      // For adding a new student, generate a new ID
      const newId = this.userService.generateNewId(); // This method will create a new ID
      user.id = newId;
      this.userService.addUser(user);
    }

    this.router.navigate(['/user3']);
  }
  navigateToStudentList(): void {
    this.router.navigate(['/user3']);
  }



}


