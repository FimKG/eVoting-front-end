import { Component, OnInit } from '@angular/core';

import { AppservService } from 'src/app/services/exports';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user_Details: any;
  role= "Role";

  constructor(
    private navservice: AppservService

  ) { }

  ngOnInit() {
    // this.user_Details = "Welcome " + this.role +": " +sessionStorage.getItem("currentUser").split('"')[3]
  }

}
