import { Component, OnInit } from '@angular/core';
import {AppservService} from '../../appserv.service';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  constructor(private logut:AppservService) { }

  ngOnInit() {
    
  }
  logOut()
  {
    this.logut.logout();
  }
}
