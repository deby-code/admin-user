// import {Injectable} from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {Observable} from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class RxjsService {
//   apiUsers = 'http://localhost:3000/users';
//   apiRoles = 'http://localhost:3000/user-roles';
//
//   constructor(private http: HttpClient) {
//   }
//
//   getUsers(): Observable<any> {
//     return this.http.get(this.apiUsers);
//   }
//   getRoles(): Observable<any> {
//     return this.http.get(this.apiRoles);
//   }
//
//   getUser(id: string): Observable<any> {
//     return this.http.get(`${this.apiUsers}/${id}`);
//   }
//
//   edit(id: string, item: any): Observable<any> {
//     if (item.id) {
//       return this.http.put(`${this.apiUsers}/${id}`, item);
//     } else {
//       return this.http.post(`${this.apiUsers}`, item);
//     }
//   }
// }
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  public loggedUser: BehaviorSubject<any> = new BehaviorSubject<any>(this.getUser());

  constructor(private http: HttpClient) {
    // this.authUser();
  }
  private getUser(): any {
    return JSON.parse(localStorage.user || null);
  }
  authUser(user): Observable<any> {
    this.loggedUser.next(user);
    return this.loggedUser;
  }
  setUser(user: any): void {
    this.setObject('user', user);
    // SecurityService.user = user;
    this.loggedUser.next(user);
  }
  setObject(key: string, value: any): void {
    localStorage[key] = JSON.stringify(value);
  }

}
