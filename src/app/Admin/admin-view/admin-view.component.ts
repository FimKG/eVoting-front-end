// import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  registerform: FormGroup;

  fac_ID: number;
  error: string;
  loading = false;
  submitted = false;
  //Variable declaration

  isrc_id: '';
  isrc_name: '';
  isrc_img: '';
      
  // sfc_id: '';
  // sfc_img: '';
  // sfc_name: '';
  // sfc_position: '';
  // image: '';
  // sfc_faculty: '';

  
  organisation: any;

  constructor(
    private adminservice: AdminServiceService,
    private registerfm: FormBuilder,
  ) { }

  ngOnInit() {
    this.registerform = this.registerfm.group({

      isrc_id: [''],
      isrc_name: [''],
      isrc_img: ['']
      // sfc_id: [''],
      // sfc_img: [''],
      // sfc_name: [''],
      // sfc_position: [''],
      // image: [''],
      // sfc_faculty: ['']
      
    });

    this.organizationselect();
  
  }

  organizationselect() {
    this.adminservice.getOrganization().subscribe(response => {
     this.organisation = response.data;
      console.log(response);

      });
  }

  onSubmit() {
    this.submitted = true;



    this.loading = true;

    
     console.log("Information : ", this.isrc_id, this.isrc_name, this.isrc_img)
       
  }

}
