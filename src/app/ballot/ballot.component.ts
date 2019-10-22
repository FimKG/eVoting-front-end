import { Component, OnInit } from '@angular/core';
//import Ballot from '../ballot';
import {HttpParams  ,HttpClient} from '@angular/common/http';
import {AppservService} from '../appserv.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent implements OnInit {

  constructor(
    private router: Router,
    private bs: AppservService, 
    private toastr: ToastrService) {
   
    }

    //Headers
    head_sfc = ['Candidate Name', 'vote'];
    head_src = ['party Name','vote'];
    head_isrc = ['party Name','Votes'];
    fac = [];

    //Fields
    sfcVotes =  [];
    csrcVotes = [];
    isrcVotes = [];

    iv =0;

   ngOnInit() {
      this.bs.getAllFaculties().subscribe(response=>{this.fac = response.data;});
      this.bs.getisrcVotes().subscribe(response=>{this.isrcVotes = response.data;});
      this.bs.getcsrcVotes().subscribe(response=>{this.csrcVotes = response.data;});//
      this.bs.getsfcVotes().subscribe(response=>{this.sfcVotes = response.data;});
    }
}