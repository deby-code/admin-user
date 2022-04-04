import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-role-select',
  templateUrl: './user-role-select.component.html',
  styleUrls: ['./user-role-select.component.scss']
})
export class UserRoleSelectComponent implements OnInit {
@Input() userRole: any;
@Input() roles: any;
@Output() roleChanged: EventEmitter<any>;

  constructor( ) {
    this.roleChanged = new EventEmitter();
  }

  ngOnInit() {
    // debugger;
  }
  changeRoleToUser(role) {
    // this.adminUserService.edit()
    this.roleChanged.emit(role);
  }
}
