import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, Validator, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../home/services/auth.service';
import { first } from 'rxjs/Operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  returnUrl: any;
  error: string;

  constructor(private fb: FormBuilder, private route: Router, private auth: AuthService,
    private active: ActivatedRoute) {
   console.log('cursee', auth.currentUserValue);
   if (auth.currentUserValue) {
     console.log(auth.currentUserValue);
     this.route.navigate(['/home']);
   }
  }

  ngOnInit() {
   /* if (this.auth.currentUserValue) {
      console.log(this.auth.currentUserValue);
      this.route.navigate(['/home']);
    }*/
    this.loginForm = this.fb.group({
      username: [""],
      password: [""]
    })
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.active.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.loginForm.controls;
  }
  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return
    }

    this.loading = true;
    this.auth.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
      data => {
        this.route.navigate(['/home/home/slider']);
      },
      error => {
        this.error = error;
        this.loading = true;
      }
      );
   }
}
