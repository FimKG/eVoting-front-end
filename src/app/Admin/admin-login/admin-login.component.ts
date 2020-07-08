import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppservService } from 'src/app/services/appserv.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  setError: any;
  loading = false;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private adminFrm: FormBuilder,
    private adminservice: AppservService,
    private router: Router,
    private toastr: ToastrService

  ) { }

  ngOnInit() {

    this.adminLogin = this.adminFrm.group({
      adm_id: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'adminpanel';
  }

  adminReg() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.adminLogin.invalid) {
      return;
    }
    
    this.adminservice.adminLogin(this.adminLogin.value.adm_id, this.adminLogin.value.password).subscribe(
      data => {
        this.loading = true;
        if (data.status == 200) {
          this.toastr.success(data.message);
          this.router.navigate([this.returnUrl]);
        } else if (data.status == 401) {
          this.setError = data.message;
          this.loading = false;
        }
      }, error => {
        this.setError = "Error: ", error.message;
        this.loading = false;
        this.submitted = false;
      })
  }

}
