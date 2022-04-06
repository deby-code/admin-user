import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AdminUserService} from '../../services/admin-user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.scss']
})
export class AdminUserEditComponent implements OnInit {
  form: FormGroup;
  @Input() userId: string;
  @Input() user: any;
  @Output() saveAction: EventEmitter<any>;
  saving: boolean = false;

  constructor(protected fb: FormBuilder, private adminUserService: AdminUserService, private notificationService: NotificationService) {
    this.saveAction = new EventEmitter();
    this.form = this.fb.group({
      id: [null],
      emailAddress: [null, [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    if (this.user) {
      this.form.patchValue(this.user);
      this.userId = this.user.id;
    }
  }

  save(): void {
    this.saving = true;
    const user = this.form.value;
    if (this.user && this.user.userRole) {
      user.userRole = this.user.userRole;
    }
    this.adminUserService.edit(this.userId, this.form.value).subscribe(response => {
      this.notificationService.sendMessage(this.userId ? 'User  modified successfully' : 'User created successfully', 'Got it');
      this.saveAction.emit();
      this.form.reset();
      this.saving = false;
    });
  }

}

