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
  users: Observable<any>;
  user: any;

  constructor(private adminUserService: AdminUserService) {
  }

  ngOnInit() {
    this.loadRoles();
    this.loadUsers();
  }

  loadRoles(): void {
    this.adminUserService.getRoles().subscribe(response => {
      this.roles = response;
    });
  }

  loadUsers(): void {
    this.users = this.adminUserService.getUsers();
  }
  getUserToEdit(event): void {
    this.user = event;
  }
}
