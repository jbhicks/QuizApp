import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssaquizComponent } from './cssaquiz.component';

describe('CssaquizComponent', () => {
  let component: CssaquizComponent;
  let fixture: ComponentFixture<CssaquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssaquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssaquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
