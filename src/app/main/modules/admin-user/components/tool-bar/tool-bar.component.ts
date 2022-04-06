import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl} from "@angular/forms";
import {AdminUserService} from "../../services/admin-user.service";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  user: any;
  searchFormControl = new FormControl('');
  constructor(private authService: AuthService, private adminUserService: AdminUserService) {
  }

  ngOnInit() {
    this.searchFormControl.valueChanges.subscribe(value => {
      this.adminUserService.searchCriteria.next(value);
      }
    );
    this.authService.loggedUser.subscribe(user => {
      this.user = user;
    });
  }
  logOut(): void {
    delete localStorage.user;
    this.authService.loggedUser.next(null);
  }
}
