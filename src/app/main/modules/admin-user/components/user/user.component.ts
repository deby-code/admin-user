import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AdminUserService} from '../../services/admin-user.service';
import {NotificationService} from '../../services/notification.service';
import {MatDialog} from "@angular/material/dialog";
import {EditUserDialogComponent} from "../edit-user-dialog/edit-user-dialog.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: any;
  @Input() roles: any;
  saving: boolean = false;
  @Output() deleted: EventEmitter<any>;
  @Output() edit: EventEmitter<any>;

  constructor(private adminUserService: AdminUserService, private notificationService: NotificationService, public dialog: MatDialog) {
    this.deleted = new EventEmitter();
    this.edit = new EventEmitter();
  }

  ngOnInit() {
  }

  changeRoleToUser(role) {
    this.saving = true;
    const user = this.user;
    user.userRole = role;
    this.adminUserService.edit(user.id, user).subscribe(response => {
      this.saving = false;
      this.notificationService.sendMessage('Role modified successfully', 'Got it');
    })
    ;
  }

  async delete(id): Promise<void> {
    await this.adminUserService.deleteUser(id).toPromise();
    this.notificationService.sendMessage('User deleted successfully', 'Got it');
    this.deleted.emit();
  }

  goEditUser(user): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '450px',
      data: {user}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleted.emit();
      }
    });
  }
}
