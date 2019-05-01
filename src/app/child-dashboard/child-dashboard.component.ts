import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-child-dashboard',
  templateUrl: './child-dashboard.component.html',
  styleUrls: ['./child-dashboard.component.scss']
})
export class ChildDashboardComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  Child: any = [];
  Parent: any = [];

  constructor(
    private authenticationService: AuthenticationService,
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
    ) { }

  ngOnInit() {

    this.restApi.getChild(this.id).subscribe((data: {}) => {
      this.Child = data;
    })

    this.restApi.getChildParents(this.id).subscribe((data: {}) => {
      this.Parent = data;
    })

  }

  // Call method in service to delete user from localStorage so auth gaurd will kick unrecognised user out.
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login-page']);
  }

}
