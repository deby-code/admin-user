import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.loggedUser.subscribe(user => {
      this.user = user;
    });
  }
  logOut(): void {
    delete localStorage.user;
    this.authService.loggedUser.next(null);
  }
}
