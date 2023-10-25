import { TestBed } from '@angular/core/testing';

import { QuizactionService } from './quizaction.service';

describe('QuizactionService', () => {
  let service: QuizactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
