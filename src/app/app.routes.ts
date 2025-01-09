import { Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import {UserListComponent } from './components/user-list/user-list.component';
import { RoleManagementComponent } from './components/role-management/role-management.component';
import { PrivilegesComponent } from './components/privileges/privileges.component';



export const routes: Routes = [
    { path: 'user-list', component: UserListComponent },
    { path: 'user-form', component: UserFormComponent },
    { path: 'roles', component: RoleManagementComponent },
    { path: 'privileges', component: PrivilegesComponent }, 
    { path: '', redirectTo: '/user-list', pathMatch: 'full' },
    
];
