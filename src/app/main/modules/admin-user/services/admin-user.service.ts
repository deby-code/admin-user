import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
  apiUsers = 'http://localhost:3000/users';
  apiRoles = 'http://localhost:3000/user-roles';
  public searchCriteria: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUsers);
  }
  getRoles(): Observable<any> {
    return this.http.get(this.apiRoles);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUsers}/${id}`);
  }

  edit(id: string, item: any): Observable<any> {
    if (id) {
      return this.http.put(`${this.apiUsers}/${id}`, item);
    } else {
      return this.http.post(`${this.apiUsers}`, item);
    }
  }
}
