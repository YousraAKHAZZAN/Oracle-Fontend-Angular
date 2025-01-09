import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseUrl = 'http://localhost:8080/api/roles';

  constructor(private http: HttpClient) {}

  // Récupérer tous les rôles
  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.baseUrl);
  }

  // Créer un rôle
  createRole(role: Role): Observable<Role> {
    return this.http.post<Role>(this.baseUrl, role);
  }

  // Supprimer un rôle
  deleteRole(roleName: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${roleName}`);
  }

  // Accorder un privilège à un rôle
  grantPrivilege(roleName: string, privilegeName: string): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/${roleName}/privileges/${privilegeName}`, {});
  }

  // Révoquer un privilège d'un rôle
  revokePrivilege(roleName: string, privilegeName: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${roleName}/privileges/${privilegeName}`);
  }
}