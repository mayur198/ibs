import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeditComponent } from './employeedit.component';

describe('EmployeeditComponent', () => {
  let component: EmployeeditComponent;
  let fixture: ComponentFixture<EmployeeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
