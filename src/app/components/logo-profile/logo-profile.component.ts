import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { RestApiService } from '../../services/rest-api.service';
import { Logopedist } from '../../models/logopedist';

@Component({
  selector: 'app-logo-profile',
  templateUrl: './logo-profile.component.html',
  styleUrls: ['./logo-profile.component.scss']
})
export class LogoProfileComponent implements OnInit {

  Logopedist: any = [];
  currentUser: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public restApi: RestApiService
  ) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
    var id = this.currentUser[0]['id']

    this.loadLogopedist(id);
  }

  loadLogopedist(id){
    return this.restApi.getLogopedist(id).subscribe((data: {}) => {
      this.Logopedist = data;
    })
  }

}
