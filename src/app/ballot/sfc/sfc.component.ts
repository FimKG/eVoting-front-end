import { Component, OnInit } from '@angular/core';
import {AppservService} from '../../appserv.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
//import {BallotComponent} from '../ballot.component'

@Component({
  selector: 'app-sfc',
  templateUrl: './sfc.component.html',
  styleUrls: ['./sfc.component.css']
})
export class SfcComponent implements OnInit {

  constructor(
    //private b: BallotComponent,
    private router: Router,
    private bs: AppservService, 
    private toastr: ToastrService) { }
    
    user_id = this.bs.user_id;

  ngOnInit() {
    this.bs.getsfc(this.user_id).subscribe(response=>{
      this.SFC = response.data;
      console.log(response.data)
    });
  }

  SFC = [];
  sfc_id: string = '';
  head_src = ['#','party Name','logo', 'vote'];
  returnUrl = 'ballot/postvote';

  submit(){
    if(this.isValid() ==true){
      this.bs.set_sfc(this.sfc_id);
      console.log('SFC: ' + this.bs.sfc_id + '\nISRC: ' + this.bs.isrc_id + '\nCSRC: ' + this.bs.csrc_id);
      
      return this.bs.addVote(this.bs.user_id, 0, this.bs.csrc_id, this.bs.sfc_id, this.bs.isrc_id, 2019).subscribe(
      data => {
        // this.toastr.success('Successfully for (' + this.user_id + ', \n'+ this.sfc_id + ' and \n' + this.iscrc_id + ')', "Voted Parties");
        this.toastr.success('Successfully Voted');
        console.log(data);
        this.router.navigate([this.returnUrl]);
      },
      error => {

      });
    }else{
      alert('Make a selection first to proceed!')
    }
  }

  isValid(){
    if(this.sfc_id==''){
      return false;
    }else{
      return true;
    }
  }

  get_sfc(rdb : string){
    this.sfc_id = rdb;
    console.log('Selected  SFC ID: ', this.sfc_id);
  }
  
}

