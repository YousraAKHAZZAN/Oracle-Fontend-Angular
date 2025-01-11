import { Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import {UserListComponent } from './components/user-list/user-list.component';
import { RoleManagementComponent } from './components/role-management/role-management.component';
import { PrivilegesComponent } from './components/privileges/privileges.component';
import { PerformanceOptimizationComponent } from './components/performance-optimization/performance-optimization.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { OptimizationReportComponent } from './components/optimization-report/optimization-report.component';
import { SlowQueriesComponent } from './components/slow-queries/slow-queries.component';
import { PerformanceMonitoringComponent } from './components/performance-monitoring/performance-monitoring.component';



export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'user-form', component: UserFormComponent },
    { path: 'roles', component: RoleManagementComponent },
    { path: 'privileges', component: PrivilegesComponent },
    { path: 'performance', component: PerformanceOptimizationComponent }, 
    { path: 'slow-queries', component: SlowQueriesComponent },
    { path: 'optimization-report/:sqlId', component: OptimizationReportComponent },
    { path: 'performancemonitoring', component: PerformanceMonitoringComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    
    
];
