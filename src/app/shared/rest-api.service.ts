import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Child } from '../shared/child';
import { Parent } from '../shared/parent';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

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
  }  

  // HttpClient API get() method => Fetch children list
  getChildren(): Observable<Child> {
    return this.http.get<Child>(this.apiURL + '/children')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getOwnChildren(id): Observable<Child> {
    return this.http.get<Child>(this.apiURL + '/logopedist/children/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch child
  getChild(id): Observable<Child> {
    return this.http.get<Child>(this.apiURL + '/children/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getChildParents(childid): Observable<Parent> {
    return this.http.get<Parent>(this.apiURL + '/parents/' + childid)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  // HttpClient API post() method => Create child
  createChild(child): Observable<Child> {
    return this.http.post<Child>(this.apiURL + '/children/add-child/', JSON.stringify(child), this.httpOptions)
    .pipe(
      retry(0),
      //catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create parent
  createParent(parent, childid): Observable<Parent> {
    return this.http.post<Parent>(this.apiURL + '/parents/add-parent/' + childid, JSON.stringify(parent), this.httpOptions)
    .pipe(
      retry(0),
      //catchError(this.handleError)
    )
  }
  



  // Error handling 
  handleError(error) {
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

