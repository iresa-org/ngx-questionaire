import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { NgxQuestionaireFormService } from './ngx-questionaire-form.service';

describe('NgxQuestionaireFormService', () => {
  let spectator: SpectatorService<NgxQuestionaireFormService>;
  const createService = createServiceFactory(NgxQuestionaireFormService);

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
