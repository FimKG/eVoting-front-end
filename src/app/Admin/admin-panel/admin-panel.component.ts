import { Component, OnInit } from '@angular/core';
import { AdminServiceService, AppservService } from 'src/app/services/exports';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  registerformSfc: FormGroup;
  registerformcsrc: FormGroup;
  registerformisrc: FormGroup;

  constructor(private adminService: AdminServiceService, private toastr: ToastrService, private registerfm: FormBuilder) { }

  head_sfc = ['#', 'logo', 'Canditate Name', 'Position', 'Total votes'];
  head_src = ['#', 'party Name', 'logo', 'Total votes'];
  head_isrc = ['#', 'party Name', 'logo', 'Total votes'];

  isrcVotes;
  csrcVotes;
  sfcVotes;
  numVoters;
  voted;
  // fac = [];
  faculties = [];
  fac_ID: number;
  candidates = "";
  faculty = "";


  // Register ISRC
  isrc_id: '';
  isrc_acronym: '';
  isrc_name: '';
  isrc_img: '';

  // Register ISRC
  csrc_id: '';
  csrc_acronym: '';
  csrc_name: '';
  csrc_img: '';

  fac_id: '';

  imgData: File = null;
  previewUrl: any = "http://ssl.gstatic.com/accounts/ui/avatar_2x.png";
  uploadedFilePath: string = null;

  ngOnInit() {
    this.registerformSfc = this.registerfm.group({
      sfc_id: [''],
      image: [''],
      sfc_name: [''],
      sfc_position: [''],
      sfc_img: [''],
      fac_id: ['']
    });

    this.registerformcsrc = this.registerfm.group({
      csrc_img: [''],
      csrc_name: [''],
      csrc_id: [''],
      csrc_acronym: ['']
    });

    this.registerformisrc = this.registerfm.group({
      isrc_img: [''],
      isrc_name: [''],
      isrc_acronym: [''],
      isrc_id: ['']
    });
    //Method call
    this.adminService.getTotalsVotes().subscribe(response => {
      this.isrcVotes = response.isrc_votes;
      this.csrcVotes = response.csrc_votes;
      this.sfcVotes = response.sfc_votes;
    });

    this.adminService.getVotersNum().subscribe(response => { this.numVoters = response.data });
    
    this.adminService.getVotersDiff().subscribe(response => { this.voted = response.data });

    this.facultyselect();
    // this.getselectcandidate();
    // this.deleterecord()
  }

  onFileChange(fileInput: any) {
    this.imgData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview 
    var imgType = this.imgData.type;
    if (imgType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.imgData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }

  facultyselect() { this.adminService.getAllFaculties().subscribe(response => { this.faculties = response.data }); }

  // selectedFaculty(facultyID) {
  //   // this.fac_id = '';
  //   this.fac_ID = facultyID;
  //   this.adminService.getCandidatesNames().subscribe(response => { this.sfcVotes = response.data; });
  // }
  // getSelectedFac(faculty) {
  //   this.appService.GetCandidate(faculty).subscribe(
  //     data => {
  //       this.candidates = data.data;
  //       console.log(this.candidates);
  //     })
  // }

  //Register sfc
  onSubmitSfc() {
    const sfc_img = new FormData();
    sfc_img.append('sfc_img', this.imgData, this.registerformSfc.value.sfc_img);

    console.log(this.registerformSfc.value.sfc_id, this.registerformSfc.value.fac_id, this.registerformSfc.value.sfc_name,
      this.registerformSfc.value.sfc_position, sfc_img)

    return this.adminService.RegisterSFC(this.registerformSfc.value.sfc_id, this.registerformSfc.value.fac_id, this.registerformSfc.value.sfc_name,
      this.registerformSfc.value.sfc_position, sfc_img).subscribe(
        response => {
          // if (response.status == 200) {
          //         this.toastr.success(response.message);
          //         //landing page firstty
          console.log("response: ", response)
          // console.log("Information : ", this.registerformSfc.value.sfc_id, this.registerformSfc.value.fac_id,
          //   this.registerformSfc.value.sfc_name,
          //   this.registerformSfc.value.sfc_position, sfc_img)
          // }
          //       else {
          //         // console.log("400", data.status == 400)
          //         //  console.log("200", data.status == 200)
          //       }
          // },
          //     error => {
          //       // this.alert.error("Error: ", error);
          //       // console.log("Error", error.status == 400)
          //       console.log("Information : " + error.status == 400 + " : ", this.sfc_name, this.sfc_faculty, this.sfc_id, this.sfc_position, this.sfc_img)
          //       // this.loading = false;
        });
    // // console.log("Information : ", this.sfc_name, this.sfc_faculty, this.sfc_id, this.sfc_position, this.image)
  }

  isrcRegistration() {
    return this.adminService.RegisterISRC(this.isrc_id, this.isrc_name, this.isrc_img)
      .subscribe(
        response => {
          if (response.status == 200) {
            this.toastr.success(response.message);
            //landing page firstty
            console.log("200", response.status == 200)
            // console.log("Information : ", this.sfc_name, this.sfc_faculty, this.sfc_id, this.sfc_position, this.sfc_img)
          }
          else {
            // console.log("400", data.status == 400)
            //  console.log("200", data.status == 200)
          }
        },
        error => {
          // this.alert.error("Error: ", error);
          // console.log("Error", error.status == 400)
          console.log("Information : " + error.status == 400 + " : ", this.registerformisrc.value.sfc_name, this.registerformisrc.value.sfc_faculty, this.registerformisrc.value.sfc_id, this.registerformisrc.value.sfc_position, this.registerformisrc.value.sfc_img)
          // this.loading = false;
        });
    
  }

  //Registration of csrc candidates
  csrcRegistration() {
    return this.adminService.RegisterCSRC(this.csrc_id, this.csrc_name, this.csrc_img)
      .subscribe(
        response => {
          if (response.status == 200) {
            this.toastr.success(response.message);
            //landing page firstty
            console.log("200", response.status == 200)
            // console.log("Information : ", this.sfc_name, this.sfc_faculty, this.sfc_id, this.sfc_position, this.sfc_img)
          }
          else {
            // console.log("400", data.status == 400)
            //  console.log("200", data.status == 200)
          }
        },
        error => {
          // this.alert.error("Error: ", error);
          // console.log("Error", error.status == 400)
          console.log("Information : " + error.status == 400 + " : ", this.registerformcsrc.value.sfc_name, this.registerformcsrc.value.sfc_faculty, this.registerformcsrc.value.sfc_id, this.registerformcsrc.value.sfc_position, this.registerformcsrc.value.sfc_img)
          // this.loading = false;
        });
    // console.log("Information : ", this.sfc_name, this.sfc_faculty, this.sfc_id, this.sfc_position, this.image)
  }
}
