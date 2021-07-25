import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public name = "code brain";
  public internal = "target_text";
  // [id] --> internal --> "target_text"
  public isdisable = false;
  public successClass = "text-success";
  // [class] --> "successClass" --> "text-success";  
  public hasError = false;
  public isSpecial = true;
  public highlightcolor = "orange";
  public greeting = "";

  public titleStyle = {
    color:"blue",
    fontStyle:"italic"
  }

  public messageClass = {
    "text-success": this.hasError,
    "text-danger": !this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){

    console.log(event.get('value'));
    this.greeting = 'welcome to here!!!';
  }
  logMessage(value){
    console.log(value);
    
  }

}