import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { EmployeeDetails } from '../../../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeId: string;
  employeefullname: string;
  currentDate: number;
  recordedited = false;
  employeeList: EmployeeDetails[];
  constructor(private empsrv: EmployeeService) { }

  ngOnInit() {
    this.employeeList = this.empsrv.getAllEmployees();
  }

  rcveditedemployee($event) {
    console.log($event);
    this.employeeId = $event.id;
    this.employeefullname = $event.firstname + ' ' + $event.lastname;
    this.currentDate = Date.now();
    this.recordedited = true;
  }

}
