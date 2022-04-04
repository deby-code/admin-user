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
  MatSliderModule
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

@NgModule({
    declarations: [AdminUserComponent, AdminUserEditComponent,
      RoleComponent, UserComponent, UserRoleSelectComponent, ToolBarComponent, AuthComponent],
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
  ],
  providers: [AuthService]
})
export class AdminUserModule {
    constructor() {
    }
}
