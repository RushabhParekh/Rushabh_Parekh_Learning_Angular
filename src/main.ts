import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {UserListComponent} from "./app/user-list/user-list.component";
import {UserListItemComponent} from "./app/user-list-item/user-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {provideRouter, Routes} from "@angular/router";

const routes: Routes = [
  {path:'', redirectTo: '/user3', pathMatch: 'full'},
  { path: 'user3', component: UserListComponent },
  { path: 'user3/:id', component: UserListItemComponent },
  {path:'modify-list-item', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}
];
bootstrapApplication(AppComponent,{providers:[provideRouter(routes)]})
.then(r=>console.log('Successful'));

