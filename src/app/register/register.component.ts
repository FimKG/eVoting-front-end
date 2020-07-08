import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdminServiceService, AppservService } from 'src/app/services/exports';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = 'Register';
  registerform: FormGroup;
  returnUrl: string;
  setError: string;

  loading = false;
  submitted = false;
  faculties = [];

  constructor(
      private registerfm: FormBuilder, private appServ: AppservService,
      private adminServ: AdminServiceService, private router: Router,
      private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.registerform = this.registerfm.group({
      student_id: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(9), Validators.maxLength(9)]],
      student_fname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      student_lname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      fac_id: ['0', Validators.required],
      vote_rules: ['', Validators.required],
      student_password: ['', [Validators.required, Validators.minLength(8)]],
      password_Conf: ['', Validators.required]
    },{ validator: MustMatchPassword('student_password', 'password_Conf') });

    this.facultyselect();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }

  facultyselect() {
    this.adminServ.getAllFaculties().subscribe(res => { this.faculties = res.data; });
  }

  // convenience getter for easy access to form fields
  get fm() {
    return this.registerform.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerform.invalid) {
      return;
    }
    this.loading = true;

    if (this.registerform.value.vote_rules) {
      return this.appServ.RegisterStudent(
        this.registerform.value.student_fname, this.registerform.value.student_lname,
        this.registerform.value.student_id, this.registerform.value.student_password, this.registerform.value.fac_id
      ).subscribe(
        data => {
          if (data.status == 200) {
            this.toastr.success(data.message);
            this.router.navigate([this.returnUrl]);
          } else {
            this.setError = data.message
            this.loading = false;
            this.submitted = false;
          }
        },
        error => {
          // this.alert.error(error);
          this.setError = error.message
          this.loading = false;
          this.submitted = false;
        }
      )
    } else {
      this.setError = "Accept to Terms and Conditions"
      this.loading = false;
      this.submitted = false;
    }
  }

}

function MustMatchPassword(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}