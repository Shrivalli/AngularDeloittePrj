import { Component } from '@angular/core';
import { Employee } from '../../Models/Employee';
import { FormsModule } from '@angular/forms';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empadd',
  imports: [FormsModule],
  templateUrl: './empadd.component.html',
  styleUrl: './empadd.component.css'
})
export class EmpaddComponent {
e:Employee;
constructor(private empservice:EmpService) {
  this.e={empid:0,empname:"",salary:0,doj:new Date()};
}


addEmp()
{
  console.log(this.e);
  this.empservice.AddEmployee(this.e);
}
}

