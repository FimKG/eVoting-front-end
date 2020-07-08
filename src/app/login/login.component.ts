import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppservService } from 'src/app/services/exports'


import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';

  loginFmgroup: FormGroup; loading = false; submitted = false; setError: string; returnUrl: any;

  students: '';
  staff: '';

  constructor(
    private loginFmBuilder: FormBuilder, private appServ: AppservService,
    private router: Router, private toastr: ToastrService, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginFmgroup = this.loginFmBuilder.group({
      student_id: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("^[0-9]*$")]],
      student_password: ['', [Validators.required, Validators.minLength(8)]],
      OTP: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("^[0-9]*$")]],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'ballot';
  }
  /*//Request opt via email
  requestOTP() {
    // if (this.loginFmgroup.value.student_id && this.loginFmgroup.value.student_password) {
    this.appServ.sendEmailOTP(this.loginFmgroup.value.student_id).subscribe()
    // } else {
    //   this.setError = "Provide User details";
    //   this.loading = false;
    //   this.submitted = false;
    // }

  }*/
  //navigate based on vote status
  navigateIfVoted(student_id) {
    this.appServ.check_votes(student_id).subscribe(data => {
      if (data.status == 200) {
        this.router.navigate(['postvote']);
      } else {
        this.router.navigate([this.returnUrl]);
      }
    });
  }

  // convenience getter for easy access to form fields
  get fm() {
    return this.loginFmgroup.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    // if (this.loginFmgroup.invalid) {
    //   return;
    // }



    if (this.loginFmgroup.value.student_id && this.loginFmgroup.value.student_password) {
      return this.appServ.userLogin(this.loginFmgroup.value.student_id, this.loginFmgroup.value.student_password, this.loginFmgroup.value.OTP).subscribe(
        data => {
          this.loading = true;
          if (data.status == 200) {
            sessionStorage.setItem('student_id', this.loginFmgroup.value.student_id)
            this.toastr.success(data.message);
            this.navigateIfVoted(this.loginFmgroup.value.student_id)
          } else if (data.status == 401) {
            this.setError = data.message;
            this.loading = false;
          }
        }, error => {
          this.setError = "Error: ", error.message;
          this.loading = false;
          this.submitted = false;
        }
      )
    } else {
      this.setError = "Provide User details";
      this.loading = false;
      this.submitted = false;
    }
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
