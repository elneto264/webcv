import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Covid19Service } from '../../covid19.service';
import { CountryReports } from 'src/countryReports';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';




@Component({
  selector: 'app-covid-tracker',
  templateUrl: './covid-tracker.component.html',
  styleUrls: ['./covid-tracker.component.css']
})
export class CovidTrackerComponent implements OnInit {

  @Input('ELEMENT_DATA')  ELEMENT_DATA!:  CountryReports[];
  displayedColumns: string[] = ['updated', 'country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'recovered', 'todayRecovered',  'critical'];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor( private service: Covid19Service) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getAllReports();
  }

  public getAllReports() {
    let resp = this.service.covid19Reports();
    resp.subscribe(report => this.dataSource.data = report as CountryReports[]);
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}
