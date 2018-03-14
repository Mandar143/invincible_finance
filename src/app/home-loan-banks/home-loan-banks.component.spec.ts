import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanBanksComponent } from './home-loan-banks.component';

describe('HomeLoanBanksComponent', () => {
  let component: HomeLoanBanksComponent;
  let fixture: ComponentFixture<HomeLoanBanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLoanBanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoanBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
