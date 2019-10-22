import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppservService } from '../../appserv.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from '../../_services';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  title = 'Login';

  adminLogin: FormGroup
  returnUrl: any;
  adm_id: '';
  password: '';
  error: any;
  loading = false;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private adminFrm: FormBuilder,
    private adminservice: AppservService,
    private router: Router,
    private toastr: ToastrService,
    private alert: AlertService

  ) { }

  ngOnInit() {

    this.adminLogin = this.adminFrm.group({
      adm_id: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      password: ['', [Validators.required, Validators.minLength(9)]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'adminpanel';
  }

  requestOTP() {
    this.adminservice.requestOTP(this.adm_id);
    //   return this.loginservice.sendEmailOTP(this.student_id).pipe(first()).subscribe()
  }


  adminReg() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.adminLogin.invalid) {
      return;
    }

    this.loading = true;
    // =============================================================
    this.adminservice.userLogin(this.adm_id, this.password)
    // ==============================================================
      .pipe(first())
      .subscribe(
        data => {

          if (data.status == 200) {
            //Send user id
            this.adminservice.set_user(Number(this.adm_id));

            this.toastr.success(data.message);

          } else if (data.status == 401) {
            this.error = data.message;
          }

        }, error => {
          this.error = error.message;
          this.alert.error(error);
          this.loading = false;

        })

  }

}
