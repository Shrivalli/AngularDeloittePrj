import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empedit',
  imports: [FormsModule],
  templateUrl: './empedit.component.html',
  styleUrl: './empedit.component.css'
})
export class EmpeditComponent implements OnInit {

emp: Employee = {empid: 0, empname: '', salary: 0, doj: new Date()};
dojString: string = '';

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private empService: EmpService
) {}

ngOnInit() {
  const empId = Number(this.route.snapshot.paramMap.get('id'));
  const employees = this.empService.getAllEmployees();
  const foundEmp = employees.find(e => e.empid === empId);
  if (foundEmp) {
    this.emp = {...foundEmp};
    this.dojString = this.formatDateForInput(this.emp.doj);
  }
}

formatDateForInput(date: Date): string {
  const d = new Date(date);
  return d.toISOString().split('T')[0];
}

saveEmployee() {
  this.emp.doj = new Date(this.dojString);
  this.empService.EditEmployee(this.emp);
  this.router.navigate(['/employees']);
}

cancel() {
  this.router.navigate(['/employees']);
}

}
