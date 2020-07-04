import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LSAQuizComponent } from './lsaquiz.component';

describe('LSAQuizComponent', () => {
  let component: LSAQuizComponent;
  let fixture: ComponentFixture<LSAQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LSAQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LSAQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
