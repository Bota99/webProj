import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../user.module';


@Injectable({providedIn: 'root'})
export class AuthService {
  authUrl = 'http://localhost:3000/auth';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): any {
    return this.http.post<any>(this.authUrl, {username, password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        // if (user && user.token) {
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }
  logout(id: number): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.http.delete(this.authUrl + '/' + id).subscribe(data => {
      console.log(data);
    });
    // @ts-ignore
    this.currentUserSubject.next(null);
  }
}
