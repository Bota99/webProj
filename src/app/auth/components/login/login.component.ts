import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../user.module';
import {ComponentCanDeactivate} from '../../../exit.hireme.guard';
import {Observable} from 'rxjs';


@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit, ComponentCanDeactivate {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
      this.authService.currentUser.subscribe(x => this.currentUser = x);

    }
  }


  // convenience getter for easy access to form fields
  get f(): any {
    return this.loginForm.controls;
  }
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  currentUser!: User;
  saved = false;


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }



    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/']);

        },
        error => {
          this.loading = false;
          console.log('Baka!');
        });
  }
  // tslint:disable-next-line:typedef
  save(){
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean>{

    if (!this.saved){
      return confirm('Вы хотите покинуть страницу?');
    }
    else{
      return true;
    }
  }
}
