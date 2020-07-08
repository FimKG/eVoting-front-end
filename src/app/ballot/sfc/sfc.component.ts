import { Component, OnInit } from '@angular/core';
import {AppservService} from 'src/app/services/exports';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sfc',
  templateUrl: './sfc.component.html',
  styleUrls: ['./sfc.component.css']
})
export class SfcComponent implements OnInit {

  constructor(
    private router: Router,
    private bs: AppservService, 
    private route: ActivatedRoute,
    private toastr: ToastrService) { }
    
    student_id = sessionStorage.getItem('student_id');

  ngOnInit() {
    this.bs.getsfc(this.student_id).subscribe(response=>{
      this.SFC = response.data;
      // console.log(response.data)
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'postvote';
  }

  SFC = [];
  sfc_id: string = '';
  head_src = ['#','party Name','logo', 'vote'];
  returnUrl : any;

  submit(){
    if(this.isValid() ==true){
      this.bs.set_sfc(this.sfc_id);
      // console.log('SFC: ' + this.bs.sfc_id + '\nISRC: ' + this.bs.isrc_id + '\nCSRC: ' + this.bs.csrc_id);
      // student_id, v_id, csrc_id, sfc_id, isrc_id, year
      return this.bs.addVote(this.student_id, 0, this.bs.csrc_id, this.bs.sfc_id, this.bs.isrc_id, 2019).subscribe(
      data => {
        this.toastr.success('Successfully Voted');
        // console.log(data);
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
    // console.log('Selected  SFC ID: ', this.sfc_id);
  }
  
}

