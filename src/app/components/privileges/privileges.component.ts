import { Component } from '@angular/core';
import { PrivilegeService } from '../../services/privilege.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-privileges',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [PrivilegeService],
  templateUrl: './privileges.component.html',
  styleUrl: './privileges.component.css'
})
export class PrivilegesComponent {
  privileges: string[] = [];
  selectedPrivilege: any = null;
  userName: string = '';

  constructor(private privilegeService: PrivilegeService) {}

  ngOnInit(): void {
    this.fetchPrivileges();
  }

  fetchPrivileges(): void {
    this.privilegeService.getAllPrivileges().subscribe({
      next: (data) => this.privileges = data,
      error: (err) => console.error('Error fetching privileges', err)
    });
  }

  fetchPrivilegeDetails(name: string): void {
    this.privilegeService.getPrivilege(name).subscribe({
      next: (data) => this.selectedPrivilege = data,
      error: (err) => console.error('Error fetching privilege details', err)
    });
  }

  grantPrivilege(): void {
    if (this.userName && this.selectedPrivilege) {
      this.privilegeService.grantSystemPrivilege(this.selectedPrivilege.name, this.userName).subscribe({
        next: () => alert('Privilege granted successfully!'),
        error: (err) => console.error('Error granting privilege', err)
      });
    }
  }

  revokePrivilege(): void {
    if (this.userName && this.selectedPrivilege) {
      this.privilegeService.revokeSystemPrivilege(this.selectedPrivilege.name, this.userName).subscribe({
        next: () => alert('Privilege revoked successfully!'),
        error: (err) => console.error('Error revoking privilege', err)
      });
    }
  }

}
