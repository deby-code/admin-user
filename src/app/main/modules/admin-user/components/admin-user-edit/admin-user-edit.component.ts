import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AdminUserService} from '../../services/admin-user.service';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.scss']
})
export class AdminUserEditComponent implements OnInit {
  form: FormGroup;
  user: any;
  @Input() userId: string;
  @Output() saveAction: EventEmitter<any>;
  saving: boolean = false;
  constructor(protected fb: FormBuilder, private adminUserService: AdminUserService) {
    this.saveAction = new EventEmitter();
    this.form = this.fb.group({
      id: [null],
      emailAddress: [null, [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
  }
  save(): void {
    this.saving = true;
    this.adminUserService.edit(this.userId, this.form.value).subscribe(response => {
      this.saveAction.emit();
      this.form.reset();
      this.saving = false;
    });
  }
}

