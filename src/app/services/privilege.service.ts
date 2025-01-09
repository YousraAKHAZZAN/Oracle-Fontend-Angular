import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeService {

  private apiUrl = 'http://localhost:8080/api/privileges';

  constructor(private http: HttpClient) {}

  getAllPrivileges(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}`);
  }

  getPrivilege(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${name}`);
  }

  grantSystemPrivilege(privilegeName: string, userName: string, withAdminOption: boolean = false): Observable<void> {
    const params = new HttpParams()
      .set('privilegeName', privilegeName)
      .set('userName', userName)
      .set('withAdminOption', withAdminOption.toString());
    return this.http.post<void>(`${this.apiUrl}/grant/system`, {}, { params });
  }

  grantObjectPrivilege(privilegeName: string, objectName: string, userName: string): Observable<void> {
    const params = new HttpParams()
      .set('privilegeName', privilegeName)
      .set('objectName', objectName)
      .set('userName', userName);
    return this.http.post<void>(`${this.apiUrl}/grant/object`, {}, { params });
  }

  revokeSystemPrivilege(privilegeName: string, userName: string): Observable<void> {
    const params = new HttpParams()
      .set('privilegeName', privilegeName)
      .set('userName', userName);
    return this.http.post<void>(`${this.apiUrl}/revoke/system`, {}, { params });
  }

  revokeObjectPrivilege(privilegeName: string, objectName: string, userName: string): Observable<void> {
    const params = new HttpParams()
      .set('privilegeName', privilegeName)
      .set('objectName', objectName)
      .set('userName', userName);
    return this.http.post<void>(`${this.apiUrl}/revoke/object`, {}, { params });
  }

  getGrantedSystemPrivileges(userName: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/system/${userName}`);
  }

  getGrantedObjectPrivileges(userName: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/object/${userName}`);
  }
}
