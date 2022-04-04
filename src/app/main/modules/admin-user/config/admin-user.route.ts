import {Route} from '@angular/router';
import {AdminUserComponent} from '../components/admin-user/admin-user.component';
import {AuthComponent} from '../components/auth/auth.component';

export const USER_ADMIN_ROUTES: Route = {
  path: '',
  children: [
    {
      path: '',
      component: AdminUserComponent
    },
    {
      path: 'auth',
      component: AuthComponent
    }
    ]
};
