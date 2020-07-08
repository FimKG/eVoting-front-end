import { Component, OnInit } from '@angular/core';
import {AppservService} from '../../services/appserv.service';
import {AdminServiceService} from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  constructor(
    private appService:AppservService,
    private adminService:AdminServiceService) { }

  ngOnInit() {
    
  }

  isrcVotes;
  csrcVotes;
  sfcVotes;
  numVoters;
  voted;
  
  logOut()
  {
    this.appService.logout();
  }
}
