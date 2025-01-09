import { Component, OnInit } from '@angular/core';
import { Role } from '../../models/role';
import { RoleService } from '../../services/role.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-role-management',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [RoleService],
  templateUrl: './role-management.component.html',
  styleUrl: './role-management.component.css'
})
export class RoleManagementComponent implements OnInit {
  roles: Role[] = [];
  role: Role = { name: '', description: '', privileges: [] };
  privileges: string = '';

  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.loadRoles();
  }

  // Charger les rôles
  loadRoles() {
    this.roleService.getAllRoles().subscribe((data) => {
      this.roles = data;
    });
  }

  // Ajouter un rôle
  addRole() {
    if (this.role.name && this.role.description) {
      this.roleService.createRole(this.role).subscribe(() => {
        this.loadRoles(); // Recharger les rôles
        this.role = { name: '', description: '', privileges: [] }; // Réinitialiser le formulaire
      });
    }
  }

  // Supprimer un rôle
  deleteRole(roleName: string) {
    this.roleService.deleteRole(roleName).subscribe(() => {
      this.loadRoles(); // Recharger les rôles
    });
  }

  // Accorder un privilège
  grantPrivilege(roleName: string) {
    if (this.privileges) {
      this.roleService.grantPrivilege(roleName, this.privileges).subscribe(() => {
        this.loadRoles(); // Recharger les rôles
        this.privileges = ''; // Réinitialiser le champ
      });
    }
  }

  // Révoquer un privilège
  revokePrivilege(roleName: string, privilege: any) {
    if (privilege && privilege.name) {
      this.roleService.revokePrivilege(roleName, privilege.name).subscribe(() => {
        this.loadRoles(); // Recharger les rôles
      });
    }
  }
}

