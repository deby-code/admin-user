import {Component, Input, OnInit} from '@angular/core';
import {AdminUserService} from '../../services/admin-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: any;
  @Input() roles: any;

  constructor(private adminUserService: AdminUserService) {
  }

  ngOnInit() {
  }

  changeRoleToUser(role) {
    const user = this.user;
    user.userRole = role;
    this.adminUserService.edit(user.id, user).subscribe(response => {
    })
    ;
  }

}
