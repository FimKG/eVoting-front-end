import { Component, OnInit } from '@angular/core';
import {AppservService} from '../../services/appserv.service';

@Component({
  selector: 'app-postvote',
  templateUrl: './postvote.component.html',
  styleUrls: ['./postvote.component.css']
})
export class PostvoteComponent implements OnInit {

  constructor(private postservice: AppservService) { }

  usersSession: any;



  ngOnInit() {
    /*Storing User Token details HTTP Authentication!!*/

    





    
  }

}
