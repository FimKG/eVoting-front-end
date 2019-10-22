import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AppservService } from 'src/app/appserv.service'
import { AlertService } from 'src/app/_services';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  returnUrl: any;

  students: '';
  staff: '';
  student_id: '';
  student_password: '';
  OTP: '';

  // date: string = "Date : " + new Date().toDateString();

  constructor(
    private loginFm: FormBuilder,
    private loginservice: AppservService,
    private router: Router,
    private toastr: ToastrService,
    private alert: AlertService,
    private route: ActivatedRoute,

  ) { }


  ngOnInit() {
    this.loginForm = this.loginFm.group({
      // ,Validators.pattern("^\d{10}$")
      student_id: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      student_password: ['', [Validators.required, Validators.minLength(8)]],
      
    });


      // OTP: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'ballot';
  }

  requestOTP() {
    this.loginservice.requestOTP(this.student_id);
  //   return this.loginservice.sendEmailOTP(this.student_id).pipe(first()).subscribe()
  }

  // ======================================================================
  SendVerificationMailOTP() {
    // console.log(this.student_id)
    // this.router.navigate(['/ballot/postvote']);
    this.navigateIfVoted(this.student_id);

  }

  navigateIfVoted(student_id) {
    this.loginservice.check_votes(student_id).subscribe(data => {
      //navigate based on vote status
      if (this.isVoted(data.message) == true) {
        this.router.navigate(['/ballot/postvote']);
      } else {
        this.router.navigate([this.returnUrl]);
      }
    });
  }
  // =============================================================================

  isVoted(msg: String): boolean {
    msg;
    if (msg.toLowerCase() == "true") {
      return true;
    } else if (msg.toLowerCase() == "false") {
      return false;
    }
  }

  // convenience getter for easy access to form fields
  get fm() {
    return this.loginForm.controls;
  }

  onSubmit() {

    //Request opt via email
    this.requestOTP();

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    return this.loginservice.userLogin(this.student_id, this.student_password)
      .pipe(first())
      .subscribe(
        data => {

          if (data.status == 200) {
            //Send user id
            this.loginservice.set_user(Number(this.student_id));

            this.toastr.success(data.message);

            // this.loginservice.check_votes(this.student_id).subscribe(data => {
            //   //navigate based on vote status
            //   if (this.isVoted(data.message) == true) {
            //     this.router.navigate(['/ballot/postvote']);
            //   } else {
            //     this.router.navigate([this.returnUrl]);
            //   }
            // });

            //this.navigateIfVoted(this.student_id);
          } else if (data.status == 401) {
            this.error = data.message;
          }

        }, error => {
          this.error = error.message;
          this.alert.error(error);
          this.loading = false;

        })
  }

  /*
  Method to check if the student Exists in the Database 
  Along with backend interactive methods
  
  if(studentExists(id)) {
      return students
  } else {
      return notFound();
  }
  */
}
