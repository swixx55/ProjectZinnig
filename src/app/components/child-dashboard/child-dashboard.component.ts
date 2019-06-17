import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

import { ModalService } from '../../services/modal.service';
import { log } from 'util';

@Component({
  selector: 'app-child-dashboard',
  templateUrl: './child-dashboard.component.html',
  styleUrls: ['./child-dashboard.component.scss']
})
export class ChildDashboardComponent implements OnInit {
  form: FormGroup;

  @Input() Photo = {photo: ''};

  id = this.actRoute.snapshot.params.id;
  Child: any = [];
  Parent: any = [];
  Score: any = [];
  goedWoord: any = [];
  foutWoord: any = [];
  selectedFile: File = null;
  stringFile: string;
  photo: any;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private modalService: ModalService,
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
    ) { }

  async ngOnInit() {
    this.form = this.formBuilder.group({
      photo: ['']
    });

    await this.restApi.getChild(this.id).subscribe((data: {}) => {
      this.Child = data;
    });

    await this.restApi.getChildParents(this.id).subscribe((data: {}) => {
      this.Parent = data;
    });

    await this.restApi.getPhoto(this.id).subscribe((data: {}) => {
      this.photo = data[0].photo;
    });

    this.getVoortgang();
  }

  get f() { return this.form.controls; }

  // Call method in service to delete user from localStorage so auth gaurd will kick unrecognised user out.
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login-page']);
  }

  openModal(id: string) {
    this.modalService.open(id);
    document.getElementById('main_container').setAttribute('class', 'blur');
  }

  closeModal(id: string) {
    this.modalService.close(id);
    document.getElementById('main_container').setAttribute('class', null);
  }

  async openVoortgangModal(id: string, goed: string, fout: string) {
    await this.restApi.getGoodWords(goed).subscribe((data: {}) => {
      this.goedWoord = data;
    });

    await this.restApi.getBadWords(fout).subscribe((data: {}) => {
      this.foutWoord = data;
    });

    this.modalService.open(id);
    document.getElementById('main_container').setAttribute('class', 'blur');
  }

  async getVoortgang() {
    await this.restApi.getVoortgang(this.id).subscribe((data: {}) => {
      this.Score = data;
      console.log(this.Score);
    });
  }

  checkPhoto(event) {
    const src = event.target.currentSrc;

    const toDataURL = url => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    }));

    toDataURL(src)
      .then(dataUrl => {
        this.restApi.updatePhoto(this.id, dataUrl).subscribe((data: {}) => {
          window.location.reload();
        });
      });
  }

  updatePhoto() {
    this.restApi.updatePhoto(this.id, this.stringFile).subscribe((data: {}) => {
      window.location.reload();
    })
  }

  onFileSelected(event) {
    const self = this;
    this.selectedFile = event.target.files[0] as File;
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
// tslint:disable-next-line: only-arrow-functions
    reader.onload = function() {
      self.stringFile =  reader.result as string;
    };
// tslint:disable-next-line: only-arrow-functions
    reader.onerror = function(error) {
      console.log('Error: ', error);
    };
  }
}
