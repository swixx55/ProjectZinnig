import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, RouterLink } from '@angular/router';

import { Logopedist } from '../models/logopedist';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Logopedist>;
  private apiUrl = 'http://localhost:8080/Logopedie-1/rest';
  private router: Router;
  public currentUser: Observable<Logopedist>;
  

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<Logopedist>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Logopedist {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/logopedist/login`, { username, password })
      .pipe(map(data => {
        // Login succesful if there is a jwt token in the response
        if (data && data[0]['token']) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.currentUserSubject.next(data);
        } else {
          // Handle the user experience for not logging in successfully
        }

        return data;
      }))
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
