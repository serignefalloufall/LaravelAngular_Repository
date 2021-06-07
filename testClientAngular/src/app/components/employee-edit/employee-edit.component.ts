import { Employee } from './../../models/employee';
import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee_data:any;
  employee = new Employee();
  id:number;

  constructor(private route:ActivatedRoute,
    private employeeService:EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getEmployee();
  }

  getEmployee(){
    this.employeeService.getemployee(this.id).subscribe(res => {
    this.employee_data = res;
    this.employee = this.employee_data;
   // console.log(res);
 
     });
  }

  updateEmployee(){
    this.employeeService.updateemployee(this.id,this.employee).subscribe(res =>{
      //this.getEmployeesData();
      this.router.navigate(['']); // pour faire la redirection vers la liste apres envoie
      });

  }

}
