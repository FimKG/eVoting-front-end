import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { AdminServiceService } from 'src/app/services/exports';
// import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-admin-CSRC-views',
  templateUrl: './admin-CSRC-views.component.html',
  styleUrls: ['./admin-CSRC-views.component.css']
})
export class AdminCSRCViewsComponent implements OnInit {

  registerform: FormGroup;

  fac_ID: number;
  error: string;
  loading = false;
  submitted = false;

  csrc_Ballot: any;
  numVoters: any;
  
  imgData: File = null;
  previewUrl: any = "http://ssl.gstatic.com/accounts/ui/avatar_2x.png";
  uploadedFilePath: string = null;

  @Input() register = {
    csrc_img: '',
    csrc_id: '',
    csrc_desc: '',
    csrc_name: ''
  }

  constructor(
    private adminservice: AdminServiceService,
    private registerfm: FormBuilder,
  ) { }

  ngOnInit() {
    this.registerform = this.registerfm.group({
      csrc_img: [''],
      csrc_id: [''],
      csrc_desc: [''],
      csrc_name: ['']
    });

    this.csrcballot();
  }

  onFileChange(fileInput: any) {
    this.imgData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview 
    var imgType = this.imgData.type;
    if (imgType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.imgData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }
  csrcballot() {
    this.adminservice.getcsrcballot().subscribe(response => {
      this.csrc_Ballot = response.data;
    });
  }

  del(csrc_id) {
    this.adminservice.deleteCsrc(csrc_id).subscribe(() => {
      this.csrcballot();
    });
  }

  edit(csrc_id) {
    this.register = csrc_id;
  }

  onSubmit() {
    this.submitted = true;



    this.loading = true;


    //  console.log("Information : ", this.isrc_id, this.isrc_name, this.isrc_img)

  }

}
