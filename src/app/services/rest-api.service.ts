import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// Models
import { Child } from '../models/child';
import { Parent } from '../models/parent';
import { Logopedist } from '../models/logopedist';
import { Voortgang } from '../models/voortgang.model';
import { Woord } from '../models/woord.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:8080/Logopedie-1/rest'

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  httpFileOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  };

  // HttpClient API get() method => Fetch children list
  getChildren(): Observable<Child> {
    return this.http.get<Child>(this.apiURL + '/children')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API get() method => Get Children under a logopedian
  getOwnChildren(id: string): Observable<Child> {
    return this.http.get<Child>(this.apiURL + '/logopedist/children/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch child
  getChild(id: string): Observable<Child> {
    return this.http.get<Child>(this.apiURL + '/children/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getVoortgang(id: string): Observable<Voortgang> {
    return this.http.get<Voortgang>(this.apiURL + '/children/voortgang/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getLevel(id: string) {
    return this.http.get(this.apiURL + '/level/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getWords() {
    return this.http.get(this.apiURL + '/woorden/get-all')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getLevelWords(id: string) {
    return this.http.get(this.apiURL + '/level/get-woorden/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getGoodWords(goed: string): Observable<string> {
    return this.http.post<string>(this.apiURL + '/children/goodwords', goed, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getBadWords(fout: string): Observable<string> {
    return this.http.post<string>(this.apiURL + '/children/badwords', fout, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Get Parents of Child
  getChildParents(childid: string): Observable<Parent> {
    return this.http.get<Parent>(this.apiURL + '/parents/' + childid)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Update Photo
  updatePhoto(id: string, photo: unknown) {
    return this.http.post(this.apiURL + '/children/update-photo/' + id, photo)
    .pipe(
      retry(0),
      //catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Get Photo
  getPhoto(id: string) {
    return this.http.get(this.apiURL + '/children/get-photo/' + id)
    .pipe(
      retry(0),
      //catchError(this.handleError)
    )
  }
  
  // HttpClient API post() method => Create child
  createChild(child: { username: string; password: string; email: string; phonenumber: string; logopedistid: string; }): Observable<Child> {
    return this.http.post<Child>(this.apiURL + '/children/add-child/', JSON.stringify(child), this.httpOptions)
    .pipe(
      retry(0),
      //catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create parent
  createParent(parent: { username: string; password: string; email: string; phonenumber: number; parent_notifications: number; }, childid: string): Observable<Parent> {
    return this.http.post<Parent>(this.apiURL + '/parents/add-parent/' + childid, JSON.stringify(parent), this.httpOptions)
    .pipe(
      retry(0),
      //catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Get Logged in Logopedian
  getLogopedist(id: string): Observable<Logopedist> {
    return this.http.get<Logopedist>(this.apiURL + '/logopedist/' + id)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }
  



  // Error handling 
  handleError(error: { error: { message: string; }; status: any; message: any; }) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}

