import { Injectable } from '@angular/core';
import { EmployeeDetails } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getAllEmployees() {
    const employeelist: EmployeeDetails[] = [
      { id: 'Emp#1', firstname: 'Ram', lastname: 'Kumar', emailid: 'ramkumar@wfsegs.com' },
      { id: 'Emp#2', firstname: 'Suchi', lastname: 'Pany', emailid: 'suchi@egswfs.com' },
      { id: 'Emp#3', firstname: 'KP', lastname: 'Dhanya', emailid: 'kpdhnay@wfsegs.com' }
    ];
    return employeelist;
  }
}
