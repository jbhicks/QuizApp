import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsaquizComponent } from './csaquiz.component';

describe('CsaquizComponent', () => {
  let component: CsaquizComponent;
  let fixture: ComponentFixture<CsaquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsaquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsaquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
