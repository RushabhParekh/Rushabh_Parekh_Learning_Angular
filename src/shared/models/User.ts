export interface User{
  id: number;
  firstName: string;
  lastName: string;
  course: string;
  fees: number;
  studentNo: number;
  isAdmin?: boolean;
  images: string;
}
