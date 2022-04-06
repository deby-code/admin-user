import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {USER_ADMIN_ROUTES} from './config/admin-user.route';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatSliderModule, MatSnackBarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminUserComponent} from './components/admin-user/admin-user.component';
import {AdminUserEditComponent} from './components/admin-user-edit/admin-user-edit.component';
import { RoleComponent } from './components/role/role.component';
import { UserComponent } from './components/user/user.component';
import { UserRoleSelectComponent } from './components/user-role-select/user-role-select.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { AuthComponent } from './components/auth/auth.component';
import {AuthService} from './services/auth.service';
import {MatProgressSpinnerModule} from '@angular/material';
import { ActionSpinnerComponent } from './components/action-spinner/action-spinner.component';
import { EditUserDialogComponent } from './components/edit-user-dialog/edit-user-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
    declarations: [AdminUserComponent, AdminUserEditComponent,
      RoleComponent, UserComponent, UserRoleSelectComponent,
      ToolBarComponent, AuthComponent, ActionSpinnerComponent, EditUserDialogComponent],
  exports: [
    ToolBarComponent
  ],
  imports: [
    RouterModule.forChild([USER_ADMIN_ROUTES]),
    CommonModule,
    MatSliderModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [AuthService],
  entryComponents: [EditUserDialogComponent]
})
export class AdminUserModule {
    constructor() {
    }
}
