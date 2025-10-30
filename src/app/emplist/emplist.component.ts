import { Component } from '@angular/core';
import { Employee } from '../../Models/Employee';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emplist',
  imports: [DatePipe,CommonModule,RouterModule],
  templateUrl: './emplist.component.html',
  styleUrl: './emplist.component.css'
})
export class EmplistComponent {

emps:Employee[];

constructor(private empservice:EmpService)
{
  this.emps=this.empservice.getAllEmployees();
}

}