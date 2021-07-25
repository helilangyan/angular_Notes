import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Input() public parentData;
  @Input('parentData1') public name1;
  @Output() public childEvent = new EventEmitter();

  public isdisable = false;
  public displayName = false;
  public color = "red";
  public internal = '';
  public colors = ["red", "blue", "orange", "yellow"];

  onClick(event){
    this.isdisable = !this.isdisable;
  }

  constructor() {
    console.log("constructor is here \n");
    
   }

  ngOnInit(): void {
    console.log("onInit using");
    
  }

  fireEvent(){
    this.childEvent.emit('hey, langyan >>>>>>>')
  }

}
