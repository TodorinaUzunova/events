import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfifyKinveyComponent } from './verfify-kinvey.component';

describe('VerfifyKinveyComponent', () => {
  let component: VerfifyKinveyComponent;
  let fixture: ComponentFixture<VerfifyKinveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerfifyKinveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfifyKinveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
