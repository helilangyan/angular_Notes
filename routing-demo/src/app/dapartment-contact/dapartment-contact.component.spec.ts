import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DapartmentContactComponent } from './dapartment-contact.component';

describe('DapartmentContactComponent', () => {
  let component: DapartmentContactComponent;
  let fixture: ComponentFixture<DapartmentContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DapartmentContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DapartmentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
