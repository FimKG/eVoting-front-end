import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError, first } from 'rxjs/operators';
import { Router, ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppservService implements CanActivate {

  /* apis */
  // _Url = "https://evotingicep.herokuapp.com/";
  _Url = "http://localhost:7000/";

  constructor(private toastr: ToastrService, private router: Router, private http: HttpClient) { }

  date: string = new Date().toDateString();

  sfc_id = '';
  csrc_id = '';
  isrc_id = '';

  set_sfc(rdb) { this.sfc_id = rdb; }

  set_src(rdb) { this.csrc_id = rdb; }

  set_isrc(rdb) { this.isrc_id = rdb; }

  //Login Sessions
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | boolean {
    const userRole = this.isLoggedIn()

    if (userRole) {
      // check if route is restricted by role
      // if (route.data.roles && route.data.roles.indexOf(userRole.role) === -1) {
      //   // role not authorised so redirect to home page
      //   this.router.navigate(['/']);
      //   return false;
      // }
      // authorised so return true
      return true;
    }
    // not logged in so redirect to home page with the return url
    // , { queryParams: { returnUrl: route.url } }
    this.router.navigate(['/login']);
    return false;
  }

  isLoggedIn() {
    let user = sessionStorage.getItem('currentUser')
    return !(user === null);
  }

  //Include Sessions
  userLogin(student_id, student_password, OTP) {
    return this.http.post<any>(this._Url + 'login', { student_id, student_password, OTP })
      .pipe(map(user => {
        /* store user details and jwt token in local storage to keep user logged in between page refreshes */
        // if (user && user.token) {
        if (user) {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        }
      }), catchError(this.handleError));
  }

  adminLogin(admin_id, admin_password) {
    return this.http.post<any>(this._Url + 'loginAdmin', { admin_id, admin_password })
      .pipe(map(user => {
        /* store user details and jwt token in local storage to keep user logged in between page refreshes */
        if (user) {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        }
      }), catchError(this.handleError));
  }

  //Logout
  logout() {
    /* remove user from local storage and set current user to null */
    sessionStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
    this.router.navigate(['/home']);
    this.toastr.success('You have successfully loggedout of E-Voting System');
  }

  //register
  RegisterStudent(student_fname, student_lname, student_id, student_password, fac_id) {
    return this.http.post<any>(this._Url + 'insert', { student_fname, student_lname, student_id, student_password, fac_id });
  }

  //otp @tut4life.ac.za
  requestOTP(id) { return this.sendEmailOTP(id).pipe(first()).subscribe() }

  sendEmailOTP(id) { return this.http.post<any>(this._Url + 'sendEmailOTP/' + id, {}) }

  // getAllFaculties() { return this.http.get<any>(this._Url + 'selectInfo') }

  //get ballot
  getsfc(id) { return this.http.get<any>(this._Url + 'ballot/sfc/' + id) }

  getisrc() { return this.http.get<any>(this._Url + 'ballot/iscrc/') }

  getsrc() { return this.http.get<any>(this._Url + 'ballot/csrc/') }

  //Submit Votes
  addVote(student_id, v_id, csrc_id, sfc_id, isrc_id, year) {
    // student_id = sessionStorage.getItem('student_id');
    return this.http.post<any>(this._Url + 'ballot/votes/', { student_id, v_id, csrc_id, sfc_id, isrc_id, year });
  }

  //Check is voted
  check_votes(student_id) {
    return this.http.post<any>(this._Url + 'voted', { student_id });
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error

    } else {
      // Get server-side error

    }

    return throwError(errorMessage);
  }

}
