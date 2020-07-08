import { Component, OnInit } from '@angular/core';
//import Ballot from '../ballot';
import { HttpParams, HttpClient } from '@angular/common/http';
import { AdminServiceService, AppservService } from 'src/app/services/exports';
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
    private adminSev: AdminServiceService,
    private appSev: AppservService,
    private toastr: ToastrService) {

  }
  //Headers
  head_sfc = ['Logo','Candidate Name', 'Vote'];
  head_src = ['Logo','Party Name', 'Vote'];
  head_isrc = ['Logo','Party Name', 'Votes'];
  fac = [];

  ngOnInit() {
    this.adminSev.getAllFaculties().subscribe(response => { this.fac = response.data; 
      console.log("getAllFaculties: ", this.fac);
    });
    //Institutional SRC
    this.adminSev.getisrcVotes().subscribe(response => { this.isrcVotes = response.data; 
      this.totalisrc = response.count;
    });
    //Central SRC
    this.adminSev.getcsrcVotes().subscribe(response => { this.csrcVotes = response.data; 
      this.totalcsrc = response.count;
    });
    this.adminSev.getCandidatesNames().subscribe(response => { this.sfcVotes = response.data; 
      console.log("getsfcVotes: ", this.sfcVotes);
    });
    //sfc
    //humanities
    this.adminSev.getsfcVotes(1).subscribe(response => { this.humanities = response.data;
      this.totalhumanities = response.count;
    });
    //ICT
    this.adminSev.getsfcVotes(2).subscribe(response => { this.ict = response.data;
      this.totalIct = response.count;
    });
    //econimics
    this.adminSev.getsfcVotes(3).subscribe(response => { this.economics = response.data;
      this.totaleconomics = response.count;
    });
    //management
    this.adminSev.getsfcVotes(4).subscribe(response => { this.management = response.data;
      this.totalmanagement = response.count;
    });
    //engineering
    this.adminSev.getsfcVotes(5).subscribe(response => { this.eng = response.data;
      this.totaleng = response.count;
    });
    //science
    this.adminSev.getsfcVotes(6).subscribe(response => { this.science = response.data;
      this.totalscience = response.count;
    });
     //art
     this.adminSev.getsfcVotes(7).subscribe(response => { this.art = response.data;
      this.totalart = response.count;
    });
  }
   //Fields
   sfcVotes = [];
   csrcVotes = [];totalcsrc = [];
   isrcVotes = [];totalisrc = [];
   humanities = [];totalhumanities = [];
   ict = [];totalIct = [];
   economics = [];totaleconomics = [];
   management = [];totalmanagement = [];
   eng = [];totaleng = [];
   science = [];totalscience = [];
   art = [];totalart = [];
}