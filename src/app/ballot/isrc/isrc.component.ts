import { Component, OnInit } from '@angular/core';
import {AppservService} from '../../appserv.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
//import {BallotComponent} from '../ballot.component'

@Component({
  selector: 'app-isrc',
  templateUrl: './isrc.component.html',
  styleUrls: ['./isrc.component.css']
})
export class IsrcComponent implements OnInit {

  constructor(
    //private b: BallotComponent,
    private router: Router,
    private bs: AppservService, 
    private toastr: ToastrService) { }

  ngOnInit() {
    this.bs.getisrc().subscribe(response=>{this.isrc = response.data;});
  }

  isrc = [];
  isrc_id: string = '';
  head_isrc = ['#','party Name','logo','vote'];
  returnUrl = './ballot/csrc';

  submit(){
    if(this.isValid() ==true){
      this.bs.set_isrc(this.isrc_id);
      this.router.navigate([this.returnUrl]);
    }else{
      alert('Make a selection first to proceed!')
    }
  }

  isValid(){
    if(this.isrc_id==''){
      return false;
    }else{
      return true;
    }
  }
  get_isrc(rdb :string){
    this.isrc_id = rdb; 
    console.log('Selected  ISRC ID: ', this.isrc_id);
  }

}
