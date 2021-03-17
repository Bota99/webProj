import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../user.module';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  currentUser!: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  usersUrl = 'http://localhost:3000/users';

  imgAvatarPath = 'assets/profileAvatar.png';
  bg = 'assets/defaultBG.jpg';


  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    this.http.get<User>(`${this.usersUrl}/?username=${this.currentUser.username}`).pipe(first()).subscribe(data => {
      this.currentUser = data[0];
      console.log(this.currentUser);
    });
  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks

    this.currentUserSubscription.unsubscribe();
  }
}
