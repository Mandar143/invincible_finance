import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanTypesComponent } from './home-loan-types.component';

describe('HomeLoanTypesComponent', () => {
  let component: HomeLoanTypesComponent;
  let fixture: ComponentFixture<HomeLoanTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLoanTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoanTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
