import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDashboardComponent } from './logo-dashboard.component';

describe('LogoDashboardComponent', () => {
  let component: LogoDashboardComponent;
  let fixture: ComponentFixture<LogoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
