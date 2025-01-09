import { Component, OnInit } from '@angular/core';
import { OracleUser } from '../../models/oracle-user';
import { UserService } from '../../services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserFormComponent } from '../user-form/user-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UserService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  router: any;
navigateToform() {
  this.router.navigate(['/user-form']);
}
  users: OracleUser[] = [];

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.loadUsers()
  }
  loadUsers(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  deleteUser(username: string): void {
    if (confirm(`Are you sure you want to delete user ${username}?`)) {
      this.userService.deleteUser(username).subscribe(() => {
        this.loadUsers();
      });
    }
  }


}
