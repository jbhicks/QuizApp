import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsaquizComponent } from './lsaquiz.component';

describe('LsaquizComponent', () => {
  let component: LsaquizComponent;
  let fixture: ComponentFixture<LsaquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsaquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsaquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
