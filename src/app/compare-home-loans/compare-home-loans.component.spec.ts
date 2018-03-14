import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareHomeLoansComponent } from './compare-home-loans.component';

describe('CompareHomeLoansComponent', () => {
  let component: CompareHomeLoansComponent;
  let fixture: ComponentFixture<CompareHomeLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareHomeLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareHomeLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
