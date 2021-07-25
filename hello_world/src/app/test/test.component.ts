import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  

  constructor() {
    var x:number[];
    x = [1, 2, 3];
    console.log(x[2]);
    enum Gender{
      Male,
      Female
    }
    console.log(Gender[Gender.Male]);
    console.log();
    var y : number;
    y = 30;
    x = x.map(x => x*x)
    console.log(x);
    var square = x => x * x;
    console.log(square(10));
    
    
    
   }

  ngOnInit(): void {
  }

}
