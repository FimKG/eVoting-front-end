import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-SRC-view.component.html',
  styleUrls: ['./admin-SRC-view.component.css']
})
export class AdminSRCViewComponent implements OnInit {

  registerform: FormGroup;

  fac_ID: number;
  error: string;
  loading = false;
  submitted = false;
  //Variable declaration

  isrc_Ballot: any;
  numVoters: any;

  @Input() register = {
    isrc_img: '',
    isrc_id: '',
    isrc_desc: '',
    isrc_name: ''
  }

  constructor(
    private adminservice: AdminServiceService,
    private registerfm: FormBuilder,
  ) { }

  ngOnInit() {
    this.isrcBallot();
    //number of voters
    this.number_Of_Voters();
  }

  number_Of_Voters() {
    this.adminservice.getVotersNum().subscribe(response => {
      this.numVoters = response.data;
    });
  }

  isrcBallot() {
    this.adminservice.getOrganization().subscribe(response => {
      this.isrc_Ballot = response.data;
      console.log(this.isrc_Ballot)
    });
  }

  del(isrc_id) {
    this.adminservice.deleteIsrc(isrc_id).subscribe(() => {
      this.isrcBallot();
    });
  }

  edit(isrc_id) {
    this.register = isrc_id;
  }

  onSubmit() {
    this.submitted = true;



    this.loading = true;


    //  console.log("Information : ", this.isrc_id, this.isrc_name, this.isrc_img)

  }

}
