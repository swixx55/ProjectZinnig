import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Logopedist } from '../../models/logopedist';

import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.scss']
})
export class AddChildComponent implements OnInit {

  currentUser: Logopedist;
  selectedFile: File = null;
  stringFile: string;
  photo: any;


  @Input() Child = {username:'', password:'', email:'', phonenumber:'', logopedistid:'',}

  constructor(
    private authenticationService: AuthenticationService,
    private modalService: ModalService,
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
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
   
  
    checkPhoto(event) {
      const src = event.target['currentSrc']
  
      const toDataURL = url => fetch(url)
      .then(response => response.blob())
      .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
      }))
    
      toDataURL(src)
        .then(dataUrl => {
          // this.restApi.updatePhoto(this.id, dataUrl).subscribe((data: {}) => {
          //   window.location.reload();
          // })
          document.getElementById('preview-img-add').setAttribute('src', <string>dataUrl);
          this.closeModal('custom-modal-1');
          console.log('set img');
          
          // document.getElementById('preview-img-add').setAttribute('src', dataUrl);
        })
    }
  
    // updatePhoto() {
    //   console.log(this.stringFile);
    //   this.restApi.updatePhoto(this.id, this.stringFile).subscribe((data: {}) => {
    //     window.location.reload();
    //   })
      
    // }
  
    onFileSelected(event) {
      var self = this;
      this.selectedFile = <File>event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = function () {
        self.stringFile =  <string>reader.result;
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }

}
