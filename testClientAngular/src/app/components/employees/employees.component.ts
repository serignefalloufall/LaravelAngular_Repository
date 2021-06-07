import { Employee } from './../../models/employee';
import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:any;
  employee = new Employee();
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {

    this.getEmployeesData();

  }

  getEmployeesData(){
    this.employeeService.getemployees().subscribe(res => {

     this.employees = res;

    });
  }

  addEmployee(){

      this.employeeService.saveemployee(this.employee).subscribe(res =>{
      this.getEmployeesData();
      });

  }

  deleteEmployee(id){
    
    this.employeeService.deleteemployee(id).subscribe(res =>{
    this.getEmployeesData();
    });

}



}
