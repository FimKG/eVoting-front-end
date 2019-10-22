import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';

 import { AppservService } from '../../appserv.service';
 import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { AuthenticationService, AlertService } from '../../_services';
 import { first } from 'rxjs/operators';
@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})



export class AdminRegisterComponent implements OnInit {

  registerform: FormGroup;

  fac_ID: number;
  error: string;
  loading = false;
  submitted = false;
  //Variable declaration

  sfc_id: '';
  sfc_img: '';
  sfc_name: '';
  sfc_position: '';
  // sfc_img: '';
  sfc_faculty: '';


  fac_id: '';
  // sfc_img:File=null;

  selectedCategory: any;

  faculty: any;
  faculties: any;
  fctlydelete:any;
  candidates: any;
  putData = [];
  // sfc_id: sfc_id[];
  

  constructor
  (
    private adminservice: AdminServiceService,
     private sfcregservice: AppservService,
     private toastr: ToastrService,
    private registerfm: FormBuilder,
     private alert: AlertService
  ) { }

  ngOnInit() {

    this.registerform = this.registerfm.group({

      sfc_id: [''],
      sfc_img: [''],
      sfc_name: [''],
      sfc_position: [''],
      // sfc_img: [''],
      sfc_faculty: ['']
      
    });
    //Method call
    this.facultyselect();
    this.canditaesselect();
    // this.getselectcandidate();
  
    
    // this.deleterecord()
  }

      //Display in dropdown
      facultyselect() {
        this.adminservice.getAllFaculties().subscribe(response => {
          this.faculties = response.data
          console.log(this.faculties);
          });
      }
    
      canditaesselect() {
        this.adminservice.getCandidatesNames().subscribe(response => {
         this.candidates = response.data;
          console.log(response);

          });
      }
      //ImageUpload
      OnFileChange(event)
      {
        
        // this.sfc_img=<File>event.target.files[0];
      }

      // drop down selecting

      getCandidatesNames(id)
  {
    this.adminservice.getCandidateSelected(id).subscribe(data=>{
      this.faculty.fac_name = Response;
      // console.log(this.postedJobs);
    })
  }

// The deleting of the record
      deleterecord(sfc_id) {
        console.log(sfc_id)
        this.adminservice.getcandidateDelete(sfc_id).subscribe(response => {
         
          // console.log(response);
          });
      }
      

      // getJobPostedStatus(job_id) {
      //   this.adminservice.getcandidateDelete(job_id).subscribe()
      // }

      
   
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    // const fd = new FormData();
    // fd.append('image',this.sfc_img,this.sfc_img.name)

    return this.sfcregservice.RegisterSFC(this.sfc_id, this.sfc_name, this.fac_id, this.sfc_position,this.sfc_img
      )
      
      .subscribe(
        response => {
          if (response.status == 200) {
            this.toastr.success(response.message);
            //landing page firstty
            
            console.log("200", response.status == 200)
            // console.log("Information : ", this.sfc_name, this.sfc_faculty, this.sfc_id, this.sfc_position, this.sfc_img)
          }
          else {

            // console.log("400", data.status == 400)
            //  console.log("200", data.status == 200)
          }
        },
        error => {
          this.alert.error("Error: ", error);
          // console.log("Error", error.status == 400)
           console.log("Information : " + error.status == 400 + " : ", this.sfc_name, this.sfc_faculty, this.sfc_id, this.sfc_position, this.sfc_img)
          // this.loading = false;
        });
    
         // console.log("Information : ", this.sfc_name, this.sfc_faculty, this.sfc_id, this.sfc_position, this.image)
        
  }




}










