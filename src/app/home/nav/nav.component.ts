import { Component, OnInit } from '@angular/core';
// import { longStackSupport } from 'q';

import { AppservService } from '../../appserv.service';
// import { LoginComponent} from '../../login/login.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  show: boolean;
  
  constructor(
    // private login: LoginComponent,
    private navservice: AppservService

  ) { }

  ngOnInit() {
    // if (this.show) {
      this.show = false;
      
    // } else {
    //   this.show=false;
    // }
  }

  logOut() {
    this.navservice.logout();
    
  }

  // hideDiv() {
  //   // console.log("his", this.show =true)

  // }
}
