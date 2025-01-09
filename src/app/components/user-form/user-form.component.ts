import { Component, OnInit } from '@angular/core';
import { OracleUser } from '../../models/oracle-user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [UserService],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: OracleUser = {
    username: '',
    password: '',
    defaultTablespace: '',
    temporaryTablespace: ''
  };
  isEditMode: boolean = false;
  form: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userPayload = {
      username: this.form.value.username.trim(),
      password: this.form.value.password.trim(),
      defaultTablespace: this.form.value.defaultTablespace.trim(),
      temporaryTablespace: this.form.value.temporaryTablespace.trim(),
      quotaLimit: this.form.value.quotaLimit,
    };
    this.userService.createUser(userPayload).subscribe(
      response => console.log('User created:', response),
      error => console.error('Error creating user:', error)
    );
    
  }

  saveUser(): void {
    if (this.isEditMode) {
      this.userService.updateUser(this.user.username, this.user).subscribe({
        next: () => {
          console.log('User updated successfully');
          this.router.navigate(['/user-list']);
        },
        error: (err) => {
          console.error('Error updating user:', err);
        }
      });
    } else {
      this.userService.createUser(this.user).subscribe({
        next: () => {
          console.log('User created successfully');
          this.router.navigate(['/user-list']);
        },
        error: (err) => {
          console.error('Error creating user:', err);
        }
      });
    }
  }
}
