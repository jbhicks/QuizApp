import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSAQuizComponent } from './cssaquiz.component';

describe('CSSAQuizComponent', () => {
  let component: CSSAQuizComponent;
  let fixture: ComponentFixture<CSSAQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSSAQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSAQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
