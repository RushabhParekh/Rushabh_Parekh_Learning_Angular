import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../../shared/models/User";

@Pipe({
  name: 'studentName',
  standalone: true
})
export class StudentNamePipe implements PipeTransform {

  transform(student: User): string{

    return `${student.firstName} ${student.lastName}`;
  }

}
