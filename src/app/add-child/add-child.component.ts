import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Logopedist } from '../models/logopedist';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.scss']
})
export class AddChildComponent implements OnInit {

  currentUser: Logopedist;


  @Input() Child = {username:'', password:'', email:'', phonenumber:'', logopedistid:'',}

  constructor(
    private authenticationService: AuthenticationService,
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
    ) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {

    var id = this.currentUser[0]['id'];

    this.Child.logopedistid = id

  }

  // Create Child
  createChild(){
    this.restApi.createChild(this.Child).subscribe(data => {
      this.router.navigate(['/dashboard'])
    })
  }

}
