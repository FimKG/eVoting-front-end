import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  _Url = "http://168.172.187.155:4000/";
  // _Url = "http://169.254.12.230:4000/selectInfo";

  constructor(private http: HttpClient ) { }
 

  getAllFaculties()  {
    return this.http.get<any>(this._Url + 'selectInfo');
    
  }

  getCandidatesNames()  {
    return this.http.get<any>(this._Url + 'getdata');
  }
 
  getOrganization(){
    return this.http.get<any>(this._Url + 'get');
  }

  // delete record
  getcandidateDelete(sfc_id){
    return this.http.post<any>(this._Url + 'sfcDel/sfc_id', {sfc_id});
  }

  // getcandidateUpdate(sfc_id){
  //   return this.http.post<any>(this._Url + 'update', {sfc_id});
  // }

  // selected candidate
  getCandidateSelected(fac_id)
  {
    return this.http.get<any>(this._Url + 'getdata', fac_id);
  }
}
