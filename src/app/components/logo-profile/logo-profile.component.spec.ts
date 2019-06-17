import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoProfileComponent } from './logo-profile.component';

describe('LogoProfileComponent', () => {
  let component: LogoProfileComponent;
  let fixture: ComponentFixture<LogoProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
