import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { RestApiService } from '../shared/rest-api.service';
import { Logopedist } from '../models/logopedist';

@Component({
  selector: 'app-logo-dashboard',
  templateUrl: './logo-dashboard.component.html',
  styleUrls: ['./logo-dashboard.component.scss']
})
export class LogoDashboardComponent implements OnInit {

  Child: any = [];
  currentUser: Logopedist;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public restApi: RestApiService
    ) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

  ngOnInit() {

    var id = this.currentUser[0]['id']

    this.loadOwnChildren(id);
  }

  // Get specific children
  loadOwnChildren(id){
    return this.restApi.getOwnChildren(id).subscribe((data: {}) => {
      this.Child = data;
    })
  }

  // Get all children
  loadChildren(){
    return this.restApi.getChildren().subscribe((data: {}) => {
      this.Child = data;
    })
  }

  // Call method in service to delete user from localStorage so auth gaurd will kick unrecognised user out.
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login-page']);
  }
}
