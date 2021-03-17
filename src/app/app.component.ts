import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';
import {User} from './user.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser!: User;
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  title = 'qiial';


  imgPath = 'assets/sun.png';
  sunPath = 'assets/sun.png';
  moonPath = 'assets/moon.png';

  imgIconPath = 'assets/profileIcon.png';
  imgLogoutPath = 'assets/logout.png';


  status = false;

  logout(id: number): void {
    this.authService.logout(id);
    this.router.navigate(['/login']);
  }
}
