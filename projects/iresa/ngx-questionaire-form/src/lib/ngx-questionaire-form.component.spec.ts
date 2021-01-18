import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { NgxQuestionaireFormComponent } from './ngx-questionaire-form.component';

describe('NgxQuestionaireFormComponent', () => {
  let spectator: Spectator<NgxQuestionaireFormComponent>;
  const createComponent = createComponentFactory(NgxQuestionaireFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
