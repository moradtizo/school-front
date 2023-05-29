import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
// import { AuthResponse } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authUrl ="http://localhost:4000/api/v1/users"




  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<User>(`${environment.apiUrl}/authenticate`, {username, password,})
      .pipe(
        map((user) => {
          console.log(JSON.stringify(user));
    
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }


  // login(email: string, password: string) {
  //   return this.http.post<User>(`http://localhost:4000/api/v1/users/login`, {email, password,})
  //     .pipe(
  //       map((user) => {
  //         console.log(user);
  //         return
  //           // user = {
  //           //   firstName: "",
  //           //   id: 1,
  //           //   img: "",
  //           //   lastName: "",
  //           //   role: "/Admin",
  //           //   token: "",
  //           //   username: "",
  //           // }
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //         this.currentUserSubject.next(user);
  //         return user;
  //       })
  //     );
  // }

  // login_2(email :string, password :string):Observable<AuthResponse>{
  //   return this.http.post<AuthResponse>(`${this.authUrl}/login`,{ email, password})
  // }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(this.currentUserValue);
    return of({ success: false });
  }
}
