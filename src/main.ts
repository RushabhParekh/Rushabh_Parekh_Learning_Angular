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

const routes: Routes = [
  {path:'', redirectTo: '/user3', pathMatch: 'full'},
  { path: 'user3', component: UserListComponent },
  { path: 'user3/:id', component: UserListItemComponent },
  {path:'modify-list-item', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}
];
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })) // Import providers dynamically
  ],
}).catch((err) => console.error(err));
