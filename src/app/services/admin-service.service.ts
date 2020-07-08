import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppservService } from 'src/app/services/appserv.service'
// import { map, catchError, first, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  /* apis */
  // _Url = "http://evotingicep.herokuapp.com/";
  _Url = "http://localhost:7000/";

  constructor(private http: HttpClient, private apps: AppservService) { }

  getAllFaculties() { return this.http.get<any>(this._Url + 'selectInfo') }

  getCandidatesNames() { return this.http.get<any>(this._Url + 'getdata') }

  getOrganization() { return this.http.get<any>(this._Url + 'get') }

  // delete record
  deleteIsrc(id) { return this.http.delete<any>(this._Url + 'isrc/' + id) }

  deleteCsrc(id) { return this.http.delete<any>(this._Url + 'csrc/' + id) }

  getVotersNum() { return this.http.get<any>(this._Url + 'number') }

  getVotersDiff() { return this.http.get<any>(this._Url + 'winner') }

  //get votes 
  getsfcVotes(fac_id) { return this.http.get<any>(this._Url + 'sfc/' + fac_id) }

  getcsrcVotes() { return this.http.get<any>(this._Url + 'csrc') }

  getisrcVotes() { return this.http.get<any>(this._Url + 'isrc') }

  getTotalsVotes() { return this.http.get<any>(this._Url + 'totals') }

  // selected candidate getCandidateSelectedDropdown
  getCandidateSelected(fac_id) { return this.http.get<any>(this._Url + 'dropdown/' + fac_id) }

  // delete record
  getcandidateDelete(sfc_id) { return this.http.delete<any>(this._Url + 'sfcDel/' + sfc_id) }

  // edit the table ........................................................... .pipe(retry(1), catchError(this.handleError))
  updateData(info) { return this.http.put<any>(this._Url + 'update' + info.sfc_id, info) }

  postImage(img) { return this.http.post(this._Url + 'imageRe', img) }

  //AdminRegister
  RegisterSFC(sfc_id, fac_id, sfc_name, sfc_position, sfc_img) { return this.http.post<any>(this._Url + 'imageRe', { sfc_id, fac_id, sfc_name, sfc_position, sfc_img }) }

  RegisterISRC(isrc_id, isrc_name, isrc_img) { return this.http.post<any>(this._Url + 'isrc', { isrc_id, isrc_name, isrc_img }) }

  RegisterCSRC(csrc_id, csrc_name, csrc_img) { return this.http.post<any>(this._Url + 'saved', { csrc_id, csrc_name, csrc_img }) }


  //get votes getdata
  // getsfcVotes() { return this.http.get<any>(this._Url + 'getdata') }

  getcsrcballot() { return this.http.get<any>(this._Url + 'ballot/csrc') }

  // getisrcVotes() { return this.http.get<any>(this._Url + 'isrc') }

  //Get Candidates based(filter) on faculty. api address needed
  // GetCandidate(id) {
  //   return this.http.get<any>(this._Url + " " + id);
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
}
