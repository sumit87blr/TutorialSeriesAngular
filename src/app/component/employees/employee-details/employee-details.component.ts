import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeDetails } from '../../../models/employee';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() employee: EmployeeDetails;

  @Output() editedemployess = new EventEmitter<EmployeeDetails>();
  constructor() { }

  ngOnInit() {
  }

  onUpdated(employeeform: NgForm) {
    // To Do
    // Again here may be we call the service to update the employee details
    // But now we will focus on passing the updated data to the parent element.
    const employeedetails: EmployeeDetails = {
      id: employeeform.value.empId,
      emailid: employeeform.value.emailId,
      firstname: employeeform.value.firstName,
      lastname: employeeform.value.lastName
    };
    this.editedemployess.emit(employeedetails);
  }

}
