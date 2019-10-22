import { Component, OnInit } from '@angular/core';
import {AppservService} from '../../appserv.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

 

  constructor(
    private bs: AppservService ) { }

    head_sfc = ['#', 'logo', 'Canditate Name', 'Position', 'Total votes'];
    head_src = ['#','party Name','logo', 'Total votes'];
    head_isrc = ['#','party Name','logo','Total votes'];
    
    isrcVotes = [];
    csrcVotes = [];
    sfcVotes = [];
    fac = [];
    faculties = [];
    fac_ID: number;
    candidates="";
    faculty="";

  ngOnInit() {
    this.bs.getAllFaculties().subscribe(response=>{this.fac = response.data;});
    this.bs.getisrcVotes().subscribe(response=>{this.isrcVotes = response.data;});
    this.bs.getcsrcVotes().subscribe(response=>{this.csrcVotes = response.data;});
    this.bs.getsfcVotes().subscribe(response=>{this.sfcVotes = response.data;});
    this. facultyselect();
  }

  facultyselect() {
    this. bs.getAllFaculties().subscribe(
      response => {
        this.faculties = response.data;
        
      });
  }
  selectedFaculty(facultyID) {
    // this.fac_id = '';
    this.fac_ID = facultyID;
    this.bs.getsfcVotes().subscribe(response=>{this.sfcVotes = response.data;});
  }
  getSelectedFac(fac_ID)
  {
    this.bs.GetCandidate(fac_ID).subscribe(
      data =>{this.candidates=data.data;
      console.log(this.candidates);}
    )
  }
}
