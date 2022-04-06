import {Component, OnInit} from '@angular/core';
import {AdminUserService} from '../../services/admin-user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {
  roles: Observable<any>;
  users: any;
  filteredUser: any;
  user: any;
  searchCriteria: string = '';

  constructor(private adminUserService: AdminUserService) {
  }

  ngOnInit() {
    this.loadRoles();
    this.loadUsers();
    this.adminUserService.searchCriteria.subscribe(value => {
      this.searchCriteria = value;
      console.log(value);
      if (this.filteredUser) {
       this.users = this.filteredUser.filter(state => state.emailAddress.toLowerCase().indexOf(this.searchCriteria) >= 0);
      }
    });
  }

  loadRoles(): void {
    this.adminUserService.getRoles().subscribe(response => {
      this.roles = response;
    });
  }

  loadUsers(): void {
    this.adminUserService.getUsers().subscribe(response => {
      this.filteredUser = response;
      this.users = response;
    });
  }

  getUserToEdit(event): void {
    this.user = event;
  }
}
