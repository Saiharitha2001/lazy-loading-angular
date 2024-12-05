import { Component , OnInit } from '@angular/core';
import {IEmployee} from '../employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  employees = [] as IEmployee[];
  optionValue: number ;
  empStatus=true;
  checkAllStatus=false;

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {empNumber : 101, empName:'ross',empSalary:65000,empAddress:'banglore' , isSelected:false},
      {empNumber : 102, empName:'rachel',empSalary:75000,empAddress:'chennai',isSelected:false},
      {empNumber : 103, empName:'monika',empSalary:85000,isSelected:false},
      {empNumber : 104, empName:'chandler',empSalary:69000,empAddress:'pune',isSelected:false},
      {empNumber : 105, empName:'phoebe',empSalary:95000,empAddress:'kochi',isSelected:false},
      {empNumber : 101, empName:'joey',empSalary:65000,isSelected:false}
    ];

  }
  public selectTab(val:number){
    this.optionValue = val;

  }
  public checkAll () 
  {

  }

}
