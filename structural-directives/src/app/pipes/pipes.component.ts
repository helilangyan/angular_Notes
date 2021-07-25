import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public name = "name";
  public pipes = "pipes";
  public person = { "firstName":"John", "lastName":"langyan"}
  constructor() { }

  ngOnInit(): void {
  }

}
