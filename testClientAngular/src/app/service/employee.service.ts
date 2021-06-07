import { Employee } from './../models/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private HttpClient:HttpClient) { }

  getemployees(){
    return this.HttpClient.get('http://127.0.0.1:8000/api/employees');
  }

  saveemployee(employee:Employee){
    return this.HttpClient.post('http://127.0.0.1:8000/api/addEmployee', employee);
  }

  deleteemployee(id:number){
    return this.HttpClient.delete('http://127.0.0.1:8000/api/deleteEmployee/'+id);
  }

  updateemployee(id:number,employee:Employee){
    return this.HttpClient.put('http://127.0.0.1:8000/api/updateEmployee/'+id, employee);
  }

  getemployee(id:number){
    return this.HttpClient.get('http://127.0.0.1:8000/api/employee/'+id);
  }
}
