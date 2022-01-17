import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSellerComponent } from './confirm-seller.component';

describe('ConfirmSellerComponent', () => {
  let component: ConfirmSellerComponent;
  let fixture: ComponentFixture<ConfirmSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
