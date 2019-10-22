import { Component, OnInit } from '@angular/core';
import {AppservService} from '../../appserv.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
//import {BallotComponent} from '../ballot.component'

@Component({
  selector: 'app-csrc',
  templateUrl: './csrc.component.html',
  styleUrls: ['./csrc.component.css']
})
export class CsrcComponent implements OnInit {

  constructor(
    //private b: BallotComponent,
    private router: Router,
    private bs: AppservService, 
    private toastr: ToastrService) { }

  ngOnInit() {
    this.bs.getsrc().subscribe(response=>{this.src = response.data;});
  }

  src = [];
  csrc_id: string = '';
  returnUrl = './ballot/sfc';

  submit(){
    if(this.isValid() ==true){
      this.bs.set_src(this.csrc_id);
      this.router.navigate([this.returnUrl]);
    }else{
      alert('Make a selection first to proceed!')
    }
  }

  isValid(){
    if(this.csrc_id==''){
      return false;
    }else{
      return true;
    }
  }
  
  get_src(rdb :string){
    this.csrc_id = rdb; 
    console.log('Selected  CSRC ID: ', this.csrc_id);
  }
  
}
