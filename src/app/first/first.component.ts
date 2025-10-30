import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
title:string="abc";
age:number;
firstnum:number;
secondnum:number;
ename:string;
picsrc:string;
result:number;

constructor()
{
  this.age=24;
  this.picsrc="/devopsinnutshell.gif"
}
login()
{
  this.age=80;
}

add()
{
  this.result=this.firstnum+this.secondnum;
}
addnumbers(a:number,b:number)
{
  this.result=a+b;
}
}
