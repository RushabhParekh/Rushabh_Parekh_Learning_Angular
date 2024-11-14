import {User} from "../../shared/models/User";


export class InMemoryDataService{
  createDb(): { user3: User[] } {

    const user3: User[]= [
      { id: 1, firstName: "Rushabh", lastName: "Parekh", course: "Computer Programming",fees:12000, studentNo: 14567891, isAdmin: false, images: "/assests/javascript1.jpg"},
      {  id: 2, firstName: "Megh", lastName: "Patel", course: "Computer System Technician",fees:12000, studentNo: 62365, isAdmin: false, images: "/assests/javascript2.webp"},
      {  id: 3, firstName: "Meetraj", lastName: "Cavda",course: "Computer Programming",fees:12000, studentNo: 2961465, isAdmin: false, images: "/assests/javascript3.jpg"},
      {  id: 4, firstName: "Shami", lastName: "Rathhod", course: "Computer Programming",fees:12000, studentNo: 2269465, isAdmin: false, images: "/assests/javascript4.jpg"},
      { id: 5, firstName: "Virat", lastName: "Patel", course: "Computer Programming",fees:12000, studentNo: 23696465, isAdmin: false, images: "/assests/javascript5.jpg"},
      {  id: 6, firstName: "Mahendra", lastName: "Patel", course: "Civil Enginnering",fees:12000, studentNo: 256465, isAdmin: false, images:"/assests/javascript6.jpg"},
    ];
    return {user3};

  }
}
