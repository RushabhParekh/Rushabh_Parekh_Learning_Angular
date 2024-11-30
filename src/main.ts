import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {UserListComponent} from "./app/user-list/user-list.component";
import {UserListItemComponent} from "./app/user-list-item/user-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {provideRouter, Routes} from "@angular/router";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/Services/in-memory-data.service";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
//name Rushabh PArekh/
const routes: Routes = [
  {path:'', redirectTo: '/user3', pathMatch: 'full'},
  { path: 'u' +
      'ser3', component: UserListComponent },
  { path: 'user3/:id',
  loadComponent:() =>
  import('./app/user-list-item/user-list-item.component'). then(m => m.UserListItemComponent)},
  {path:'modify-list-item',
  loadComponent:() =>
  import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)},
  {path: '**',
  loadComponent:() =>
  import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)}
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1})),
    provideAnimationsAsync(), // Import providers dynamically
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],

}).catch((err) => console.error(err));

