import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
  apiUsers = 'http://localhost:3000/users';
  apiRoles = 'http://localhost:3000/user-roles';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUsers);
  }
  getRoles(): Observable<any> {
    return this.http.get(this.apiRoles);
  }

  getUser(id: string): Observable<any> {
    return this.http.get(`${this.apiUsers}/${id}`);
  }

  edit(id: string, item: any): Observable<any> {
    if (id) {
      return this.http.put(`${this.apiUsers}/${id}`, item);
    } else {
      return this.http.post(`${this.apiUsers}`, item);
    }
  }
}
