import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  constructor(private _employeeServece: EmployeeService) { }

  ngOnInit(): void {
    this._employeeServece.getEmployees()
    .subscribe(data =>this.employees = data);
  }

}
