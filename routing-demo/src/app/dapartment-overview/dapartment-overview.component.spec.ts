import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DapartmentOverviewComponent } from './dapartment-overview.component';

describe('DapartmentOverviewComponent', () => {
  let component: DapartmentOverviewComponent;
  let fixture: ComponentFixture<DapartmentOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DapartmentOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DapartmentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
