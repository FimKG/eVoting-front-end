// import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  // registerform: FormGroup;

  // fac_ID: number;
  // error: string;
  // loading = false;
  // submitted = false;
  // //Variable declaration
  
  // organisation: any;
  // numVoters:any;
  

  constructor(
    private adminservice: AdminServiceService,
    private registerfm: FormBuilder,
  ) { }

  ngOnInit() {
    // this.adminservice.getOrganization().subscribe(response => {
    //   this.organisation = response.data;
    //   });
    
    // //number of voters
    // this.adminservice.getVotersNum().subscribe(response => {
    //   this.numVoters = response.data;
    //   });
  }

  // del(isrc_id) {
    
  //   this.adminservice.deleteIsrc(isrc_id).subscribe(response => {
      
  //     alert("About to delete " + isrc_id);

  //   });
  // }

  // edit() {
  //   alert("edit button worrks");
  // }

  // onSubmit() {
  //   this.submitted = true;



  //   this.loading = true;

    
  //   //  console.log("Information : ", this.isrc_id, this.isrc_name, this.isrc_img)
       
  // }

}
