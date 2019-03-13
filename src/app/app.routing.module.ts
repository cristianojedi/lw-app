import { Routes } from '@angular/router';

import { UserListComponent } from './users/user-list/user-list.component';
import { UserInsertComponent } from './users/user-insert/user-insert.component';

export const rootRouterConfig: Routes = [
  { path: '', component: UserInsertComponent },
  { path: 'user-insert', component: UserInsertComponent },
  { path: 'users', component: UserListComponent }
];
