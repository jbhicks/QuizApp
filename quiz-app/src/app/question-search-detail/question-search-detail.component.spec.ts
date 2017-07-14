import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSearchDetailComponent } from './question-search-detail.component';

describe('QuestionSearchDetailComponent', () => {
  let component: QuestionSearchDetailComponent;
  let fixture: ComponentFixture<QuestionSearchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSearchDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
