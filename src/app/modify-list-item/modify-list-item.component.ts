import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../shared/models/User";
import {UserService} from "../Services/user.service";
import {NgIf} from "@angular/common";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";


@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    HighlightOnFocusDirective
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
      firstName: [''],//First name is required
      lastName: [''],
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
    if(this.userForm.valid){
      const student:User = this.userForm.value;
      console.log(this.userForm.value);
      console.log(student.id);
      if(student.id){
        console.log("Exists id is working");
        this.userService.updateStudent(student).subscribe(()=>this.router.navigate(['user3']));
      }else{
        console.log("new id is working");
        student.id = this.userService.generateNewId();
        this.userService.addStudent(student).subscribe(()=>this.router.navigate(['user3']));
      }

    }
  }
  navigateToStudentList(): void {
    this.router.navigate(['/user3']);
  }



}


