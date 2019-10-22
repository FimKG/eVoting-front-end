import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, catchError, first } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';
import { Router, ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppservService {
  // Sessions
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private isLoggedInStatus = false;


  date: string = new Date().toDateString();


  /* apis */
  // _Url = "http://168.172.187.155:4000/";
  _Url = "http://localhost:4000/"; 

  user_id;
  sfc_id = '';
  csrc_id = '';
  isrc_id = '';
  show: boolean;

  intit(is: boolean) {
    this.show = is;
  }

  set_user(u: number) {
    this.user_id = u;
  }

  set_sfc(rdb: string) {
    this.sfc_id = rdb;
  }

  set_src(rdb: string) {
    this.csrc_id = rdb;
  }

  set_isrc(rdb: string) {
    this.isrc_id = rdb;
  }

  constructor
    (
      private toastr: ToastrService,
      private router: Router,
      private http: HttpClient
    ) {

    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  //Login
  currentUserValue(value: boolean) {
    this.isLoggedInStatus = value;
  }

  get isLoggedIn() {
    return this.isLoggedInStatus;
  }

  //Include Sessions
  userLogin(student_id, student_password) {

    // if()
    // {
    // adim

    // }else{
    // student


    // }
    return this.http.post<any>(this._Url + 'login', { student_id, student_password })
      .pipe(map(user => {
        /* store user details and jwt token in local storage to keep user logged in between page refreshes */
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }
      })
        , catchError(this.handleError));
  }

  //register
  RegisterStudent(student_id, student_fname, student_lname, student_password, fac_id) {
    return this.http.post<any>(this._Url + 'insert', { student_id, student_fname, student_lname, student_password, fac_id });
  }

  //otp @tut4life.ac.za

  requestOTP(id) {
    return this.sendEmailOTP(id).pipe(first()).subscribe()
  }

  sendEmailOTP(id) {
    return this.http.post<any>(this._Url + "sendEmail", { id }).pipe()
  }

  getAllFaculties() {
    return this.http.get<any>(this._Url + 'selectInfo');
  }

  //Logout
  logout() {
    /* remove user from local storage and set current user to null */
    localStorage.removeItem('currentUser');
    // this.show = false;
    this.currentUserSubject.next(null);
    this.router.navigate(['/home']);
    this.toastr.success('Successfully LoggedOut');
  }

  //get ballot
  getsfc(id) {
    //return this.http.get<any>(this._sfcUrl);
    return this.http.get<any>(`${this._Url}ballot/sfc/${id}`);
  }

  getisrc() {
    return this.http.get<any>(`${this._Url}ballot/iscrc/`);
  }

  getsrc() {
    return this.http.get<any>(`${this._Url}ballot/csrc/`);
  }

  //Submit Votes
  addVote(student_id, v_id, csrc_id, sfc_id, isrc_id, year) {
    return this.http.post<any>(this._Url + 'ballot/votes/', { student_id, v_id, csrc_id, sfc_id, isrc_id, year });
  }

  //get votes
  getsfcVotes() {
    return this.http.get<any>(`${this._Url}sfc/`);
  }

  getcsrcVotes() {
    return this.http.get<any>(`${this._Url}csrc/`);
  }

  getisrcVotes() {
    return this.http.get<any>(`${this._Url}isrc/`);
  }

  //Check is voted
  check_votes(student_id) {
    return this.http.post<any>(this._Url + 'voted', { student_id });
  }

  //AdminRegisterSFC
  RegisterSFC(sfc_id, sfc_name, fac_id, sfc_position, sfc_img) {
    return this.http.post<any>(this._Url + 'imageRe', { sfc_id, sfc_name, fac_id, sfc_position, sfc_img });
  }

  //Get Candidates based on faculty
  GetCandidate(id: number) {
    return this.http.get<any>(this._Url + id);
  }

  // HttpClient API put() method => Update 

  //   update(): Observable<any> {
  //     return this.http.put<any>()
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //   )
  // }

  // HttpClient API delete() method => Delete 
  // delete(){
  //   return this.http.delete<any>()
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

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

  /*canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authentication.currentUserValue;
    if (currentUser) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
    return false;
  }*/
}
