import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddincasareComponent } from './addincasare.component';

describe('AddincasareComponent', () => {
  let component: AddincasareComponent;
  let fixture: ComponentFixture<AddincasareComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddincasareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddincasareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
