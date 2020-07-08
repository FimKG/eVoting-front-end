import { Component, OnInit } from '@angular/core';
import { AppservService } from 'src/app/services/appserv.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
   private footServ : AppservService
  ) { }
  date: any;
  ngOnInit() {

    this.date = new Date().getFullYear();
  }

}

