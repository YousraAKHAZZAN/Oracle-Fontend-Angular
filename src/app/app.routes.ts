import { Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import {UserListComponent } from './components/user-list/user-list.component';
import { RoleManagementComponent } from './components/role-management/role-management.component';
import { PrivilegesComponent } from './components/privileges/privileges.component';
import { PerformanceOptimizationComponent } from './components/performance-optimization/performance-optimization.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';



export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'user-form', component: UserFormComponent },
    { path: 'roles', component: RoleManagementComponent },
    { path: 'privileges', component: PrivilegesComponent },
    { path: 'performance', component: PerformanceOptimizationComponent }, 
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    
    
];
