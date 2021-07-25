import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrls: ['./ng-on-init.component.css']
})
export class NgOnInitComponent implements OnInit {
  //@Input()
  internal: string;

  constructor() {
      // constructor中还不能获取到组件/指令中被传入的数据
      console.log(this.internal);     // undefined
  }

  ngOnInit() {
      // ngOnInit中已经能够获取到组件/指令中被传入的数据
      console.log(this.internal);     // 传入的数据
  }

}