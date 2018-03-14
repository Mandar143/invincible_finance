import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElgCriComponent } from './home-elg-cri.component';

describe('HomeElgCriComponent', () => {
  let component: HomeElgCriComponent;
  let fixture: ComponentFixture<HomeElgCriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeElgCriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeElgCriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
