import { TestBed, inject } from '@angular/core/testing';

import { QuestionSearchService } from './question-search.service';

describe('QuestionSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionSearchService]
    });
  });

  it('should ...', inject([QuestionSearchService], (service: QuestionSearchService) => {
    expect(service).toBeTruthy();
  }));
});
