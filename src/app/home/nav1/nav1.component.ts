import { Component, OnInit } from '@angular/core';

import { AppservService } from '../../appserv.service';

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.css']
})
export class Nav1Component implements OnInit {

  constructor(
    private navservice: AppservService
  ) { }

  ngOnInit() {
  }
  logOut() {
    this.navservice.logout();

  }
}
