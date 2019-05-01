import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.component.html',
  styleUrls: ['./add-parent.component.scss']
})
export class AddParentComponent implements OnInit {

  @Input() Parent = {username:'', password:'', email:'', phonenumber:0, parent_notifications:0,}

  id = this.actRoute.snapshot.params['id'];
  Child: any = [];

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {

    // Get Child data
    this.restApi.getChild(this.id).subscribe((data: {}) => {
      this.Child = data;
    })
  }

  // Create Parent
  createParent(){
    this.restApi.createParent(this.Parent, this.id).subscribe(data => {
      this.router.navigate([`/child/${this.id}`]);
    })
  }

}
