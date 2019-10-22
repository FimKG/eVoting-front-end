import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService, AlertService } from '../_services';
import { AppservService } from '../appserv.service';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // code: number;
  // message: string;
  // faculties = [];

  title = 'Register';
  registerform: FormGroup;
  returnUrl: string;
  fac_ID: number;
  error: string;
  loading = false;
  submitted = false;

  student_id: '';
  student_fname: '';
  student_lname: '';
  student_password: '';
  fac_id: '';

  constructor
    (
      private registerfm: FormBuilder,
      private registerservice: AppservService,
      private router: Router,
      // private authenticationService: AuthenticationService,
      private toastr: ToastrService,
      private alert: AlertService,
      private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.registerform = this.registerfm.group({

      //Validators.pattern("^\d{10}$") ])

      student_id: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      student_fname: ['', Validators.required],
      student_lname: ['', Validators.required],
      fac_id: ['', Validators.required],
      vote_rules: ['', Validators.required],
      student_password: ['', [Validators.required, Validators.minLength(6)]],
      password_Conf: ['', Validators.required]
    },
      { validator: MustMatch('student_password', 'password_Conf') }
    );

    this.facultyselect();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }


  facultyselect() {
    this.registerservice.getAllFaculties().subscribe();
  }

  selectedFaculty(facultyID) {
    this.fac_ID = facultyID;
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
    console.log(this.fac_id)
    return this.registerservice.RegisterStudent
      (
        // encrypt the password before saving in the database with md5
        this.student_id, this.student_fname, this.student_lname, this.student_password, this.fac_id
      )
      .pipe(first())
      .subscribe(
        data => {

          if (data.status == 200) {

            this.toastr.success(data.message);

            this.router.navigate([this.returnUrl]);
          }
          else {

          }

        },
        error => {
          this.alert.error(error);
          this.loading = false;
        }
      );
  }

}