import { TestBed } from '@angular/core/testing';

import { NgxQuestionaireFormService } from './ngx-questionaire-form.service';

describe('NgxQuestionaireFormService', () => {
  let service: NgxQuestionaireFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxQuestionaireFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
