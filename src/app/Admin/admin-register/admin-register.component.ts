import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AdminServiceService } from 'src/app/services/exports';

import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']

})

export class AdminRegisterComponent implements OnInit {

  registerform: FormGroup;

  //Variable declaration
  fac_ID: number;
  error: string;
  loading = false;
  submitted = false;

  sfc_id: '';
  sfc_img: '';
  sfc_name: '';
  sfc_position: '';
  sfc_faculty: '';

  @Input() register = {
    sfc_id: '',
    sfc_img: '',
    sfc_name: '',
    sfc_position: '',
    sfc_faculty: ''
  }

  fac_id: '';
  // sfc_img:File=null;
  selectedCategory: any;
  faculty: any;
  faculties: any;
  fctlydelete: any;
  candidates: any;
  // candidatess: any;
  putData = [];
  selectedFacultyID: number;

  constructor(private adminservice: AdminServiceService, private toastr: ToastrService, private registerfm: FormBuilder) { }

  ngOnInit() {

    this.registerform = this.registerfm.group({
      sfc_id: [''],
      image: [''],
      sfc_name: [''],
      sfc_position: [''],
      sfc_img: [''],
      sfc_faculty: ['']
    });
    //Method call
    this.facultyselect();
    this.candidates_select();

    // this.getselectcandidate();

    // this.deleterecord()
  }

  facultyselect() { this.adminservice.getAllFaculties().subscribe(res => { this.faculties = res.data; }) }

  candidates_select() { this.adminservice.getCandidatesNames().subscribe(response => { this.candidates = response.data; }) }
  //ImageUpload in the modal
  OnFileChange(event) {

    console.log(event);

  }

  // The deleting of the record is working
  deleterecord(sfc_id) {
    this.adminservice.getcandidateDelete(sfc_id).subscribe(() => { this.candidates_select(); });
  }

  // The edit button 
  edit(candidate) {
    this.register = candidate;
    // this.faculties = this.register.sfc_faculty;

    // candidate = this.faculties;
  }

  //The edit button
  editbutton() {
    this.adminservice.updateData(this.sfc_name).subscribe(() => { this.candidates_select(); })
  }

  // drop down selecting
  getSelectedCat(e) {
    console.log(e)
    this.selectedFacultyID = e.fac_id;
    this.getCandidatePerFaculty(this.selectedFacultyID);

  }

  getCandidatePerFaculty(id: number) {
    this.adminservice.getCandidateSelected(id).subscribe(data => {
      this.candidates = data.data;
      console.log(this.candidates);

    })

  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    return this.adminservice.RegisterSFC(this.sfc_id, this.sfc_name, this.fac_id, this.sfc_position, this.sfc_img)
      .subscribe(
        response => {
          if (response.status == 200) {
            this.toastr.success(response.message);
            //landing page firstty
          }
          else {

          }
        },
        error => {
          this.loading = false;
        });

    // console.log("Information : ", this.sfc_name, this.sfc_faculty, this.sfc_id, this.sfc_position, this.image)
  }




}










