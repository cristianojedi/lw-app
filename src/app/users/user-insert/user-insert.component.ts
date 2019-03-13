import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css']
})
export class UserInsertComponent implements OnInit {
  public form: FormGroup;
  public user: User;
  public submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      cpf: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])]
    });

    this.user = new User();
  }

  get f() { return this.form.controls; }

  ngOnInit() {
  }

  onInsert() {
    if (this.form.invalid) {
      return;
    } else {
      const user = Object.assign({}, this.user, this.form.value);
      this.userService.insert(user);
      this.clear();

      this.router.navigate(['/users']);
    }
  }

  onLogin() {
    this.router.navigate(['/user-insert']);
  }

  clear() {
    this.form.reset();
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
