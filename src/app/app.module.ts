import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserService } from './services/user.service';
import { routes } from './app.routes';
import { RoleManagementComponent } from './components/role-management/role-management.component';



@NgModule({
  declarations: [RoleManagementComponent],
  imports: [AppComponent,BrowserModule,FormsModule, HttpClientModule,  RouterModule.forRoot(routes)],
  providers: [UserService,HttpClient],
  bootstrap: [] // Bootstrap your root component
})
export class AppModule {}
