import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user.module';


@Injectable({providedIn: 'root'})
export class UserService {

  usersUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {
  }

  getAll(): any {
    return this.http.get<User[]>(this.usersUrl);
  }

  register(user: User): any {
    return this.http.post(this.usersUrl, user);
  }

  delete(id: number): any {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
}
