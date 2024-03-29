import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PasswordForgotComponent } from './password-forgot.component';

describe('PasswordForgotComponent', () => {
  let component: PasswordForgotComponent;
  let fixture: ComponentFixture<PasswordForgotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordForgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
