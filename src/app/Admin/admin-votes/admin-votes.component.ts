import { Component, OnInit } from '@angular/core';
import {AppservService} from '../../appserv.service'
@Component({
  selector: 'app-admin-votes',
  templateUrl: './admin-votes.component.html',
  styleUrls: ['./admin-votes.component.css']
})
export class AdminVotesComponent implements OnInit {
  faculties = [];
  fac_ID: number;
  constructor(private registerservice: AppservService) { }

  ngOnInit() {
    this.facultyselect();
  }

  facultyselect() {
    this.registerservice.getAllFaculties().subscribe(
      response=>{
        // if(response.data = 200) {
          this.faculties = response.data;
        // }else {
          // this.faculties = 400;
        // }

    });
  }

  selectedFaculty(facultyID) {

    this.fac_ID = facultyID;
    console.log(this.fac_ID);
  }
}

