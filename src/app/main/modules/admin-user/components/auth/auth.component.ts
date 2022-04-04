import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  constructor(private authService: AuthService, private route: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
    });
  }

  ngOnInit() {

  }

  logUser(): void {
    const user =  this.form.value;
    this.authService.setUser(user);
    this.route.navigate(['admin-user']);
  }

}
