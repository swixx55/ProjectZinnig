import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ModalService } from 'src/app/services/modal.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {

  id = this.actRoute.snapshot.params.id;
  level: any = [];
  woorden: any = [];
  allewoorden: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private modalService: ModalService,
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  async ngOnInit() {
    await this.getLevel(this.id);
    await this.getWoorden(this.id);
    await this.getAllWoorden();
  }

  async getLevel(id) {
    await this.restApi.getLevel(id).subscribe((data: {}) => {
      this.level = data[0];
    });
  }

  async getWoorden(id) {
    await this.restApi.getLevelWords(id).subscribe((data: {}) => {
      this.woorden = data;
    })
  }

  async getAllWoorden() {
    await this.restApi.getWords().subscribe((data: {}) => {
      this.allewoorden = data;
    })
  }

    openModal(id: string) {
    this.modalService.open(id);
    document.getElementById('main_container').setAttribute('class', 'blur');
  }

  closeModal(id: string) {
    this.modalService.close(id);
    document.getElementById('main_container').setAttribute('class', null);
  }

}
