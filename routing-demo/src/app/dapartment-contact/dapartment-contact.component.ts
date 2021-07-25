import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dapartment-contact',
  template: `
    <p>
      dapartment-contact: {{phone}}
    </p>
  `,
  styles: [
  ]
})
export class DapartmentContactComponent implements OnInit {
  public phone = "3479778827";

  constructor() { }

  ngOnInit(): void {
  }

}
