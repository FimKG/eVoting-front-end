import { Component, OnInit } from '@angular/core';
import { AdminServiceService, AppservService } from 'src/app/services/exports';
import { Response } from 'selenium-webdriver/http';

// import { GoogleChartPackagesHelper } from 'angular-google-charts';
// import { ScriptLoaderService } from 'angular-google-charts';
@Component({
  selector: 'app-admin-votes',
  templateUrl: './admin-votes.component.html',
  styleUrls: ['./admin-votes.component.css']
})
export class AdminVotesComponent implements OnInit {
  faculties = [];
  fac_id = "";
  //Fields
  sfcVotes = [];
  csrcVotes = [];
  isrcVotes = [];
  //message
  sfcMsg;
  isrcMsg;
  csrcMsg;
  //
  // fac = [];
  facultySelected: any;

  isrc_total: number;
  csrc_total: number;
  registeredVoters: number;
  chartData: any = "['EFFSC',1],['PASMA',1]";
// , private loaderService: ScriptLoaderService
  constructor(private adminService: AdminServiceService) { }
  
  public chart = {
    title: 'Test Chart',
    type: 'PieChart',
    data: this.chartData,
    columnNames: ['Element', 'Density'],
    options: {
      animation: {
        duration: 250,
        easing: 'ease-in-out',
        startup: true
      }
    }
  };
  

  // public rawChartData: google.visualization.ChartSpecs = {
  //   chartType: 'AreaChart',
  //   dataTable: [
  //     ['SMR CV', 'US Cents/KG'],
  //     [new Date(1990, 1, 1), 10],
  //     [new Date(1991, 1, 1), 20],
  //     [new Date(1992, 1, 1), 40],
  //     [new Date(1993, 1, 1), 80],
  //     [new Date(1994, 1, 1), 160],
  //     [new Date(1995, 1, 1), 320],
  //     [new Date(1996, 1, 1), 640],
  //     [new Date(1997, 1, 1), 1280]
  //   ]
  // };
  
  ngOnInit() {
    this.fac_id = "1"
    this.adminService.getAllFaculties().subscribe(response => { this.faculties = response.data; });
    this.adminService.getisrcVotes().subscribe(response => { this.isrcVotes = response.data; this.isrcMsg = response.count, this.chartData = response.chartData , console.log(this.chartData)});
    this.adminService.getcsrcVotes().subscribe(response => { this.csrcVotes = response.data; this.csrcMsg = response.count });
    this.adminService.getTotalsVotes().subscribe(response => { this.csrc_total = response.csrc_votes; this.isrc_total = response.isrc_votes; });
    this.adminService.getVotersNum().subscribe(response => { this.registeredVoters = response.data; });
    this.selectedFaculty();
    
    // this.loaderService.onReady.subscribe(() => {
    //   this.loaderService.loadChartPackages([this.areaChartPackage]).subscribe(() => {
    //     this.rawFormatter = [{ formatter: new google.visualization.DateFormat({ formatType: 'long' }), colIndex: 0 }];
    //   });
    // });
  }

  public rawFormatter: any;
  // private areaChartPackage = GoogleChartPackagesHelper.getPackageForChartName('AreaChart');

  selectedFaculty() { this.adminService.getsfcVotes(this.fac_id).subscribe(response => { this.sfcVotes = response.data; this.sfcMsg = response.count }); }

}


