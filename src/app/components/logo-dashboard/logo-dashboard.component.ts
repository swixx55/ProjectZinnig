import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { RestApiService } from '../../services/rest-api.service';
import { Logopedist } from '../../models/logopedist';
import * as $ from 'jquery';

@Component({
  selector: 'app-logo-dashboard',
  templateUrl: './logo-dashboard.component.html',
  styleUrls: ['./logo-dashboard.component.scss']
})
export class LogoDashboardComponent implements OnInit {

  Child: any = [];
  Logopedist: any = [];
  currentUser: any;
  photo: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public restApi: RestApiService
    ) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

  ngOnInit() {

    var id = this.currentUser[0]['id']
    var name = this.currentUser[0]['username']

    this.loadOwnChildren(id);
    this.loadLogopedist(id);

  }

  loadLogopedist(id){
    return this.restApi.getLogopedist(id).subscribe((data: {}) => {
      this.Logopedist = data;
    })
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

  // Listen for keyevents and pairs them with the search input, 
  // then searches the cards on the website for any ressemblance with the search value.
  // Then hides those with no ressemblance. (Does not check <p> tags only <h> tags)
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    var target = event.srcElement['name']

    if (target == 'search-input') {
      let searchVar = (<HTMLInputElement> document.getElementById("search-input")).value;
      var $rows = $('.child-card-search');
      
      var val = '^(?=.*\\b' + $.trim(searchVar).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
            reg = RegExp(val, 'i'),
            text;

        $rows.show().filter(function() {
            text = $(this).text().replace(/\s+/g, ' ');
            return !reg.test(text);
        }).hide();
      
    }
    
  }

  // Call method in service to delete user from localStorage so auth gaurd will kick unrecognised user out.
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login-page']);
  }
}
