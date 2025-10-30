import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
//e:Employee;
emps:Employee[];

constructor()
{
  //this.e={empid:101,empname:"John",salary:45000,doj:new Date("2020-01-15")};
  this.emps=[
    {empid:102,empname:"Jane",salary:50000,doj:new Date("2020-02-20")},
    {empid:103,empname:"Mike",salary:60000,doj:new Date("2020-03-25")},
    {empid:104,empname:"Sara",salary:55000,doj:new Date("2020-04-30")},
    {empid:105,empname:"Tom",salary:48000,doj:new Date("2020-05-05")}
  ];
}

getAllEmployees():Employee[]
{
  return this.emps;
}

AddEmployee(emp:Employee)
{
  this.emps.push(emp);  

}


EditEmployee(emp:Employee)
{
  const index = this.emps.findIndex(e => e.empid === emp.empid);
  if (index !== -1) {
    this.emps[index] = emp;
  }
}

DeleteEmployee(empid:number)
{
  this.emps = this.emps.filter(e => e.empid !== empid);
}
}