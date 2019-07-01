import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
public first: number= 0.0;
public second: number= 0.0;
public operand: string = "+";
public result: number;

constructor() {}

  ngOnInit() {
  }
process() {
  switch(this.operand) {
    case'+':
    this.result = this.first + this.second;
    break;
    case'-':
    this.result = this.first - this.second;
    break;
    case'/':
    this.result = this.first / this.second;
    break;
    case'x':
    this.result = this.first * this.second;
    break;
  
  default:
break;
}

}
}