import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FormApi } from '../api/form.api';
import { QuestionaireConfig } from '../api/questionaire-form.config';

export const FG_NAME = 'results';

@Injectable()
export class NgxQuestionaireFormService implements FormApi {

  formGroup!: FormGroup;
  formArray!: FormArray;
  formConfig!: QuestionaireConfig[];
  selectedIndex = 0;
  total = 0;

  constructor(private fb: FormBuilder) { }

  initForm(): void {
    this.formGroup = this.fb.group({ [FG_NAME]: this.fb.array([]) });
    this.formArray = this.formGroup.get(FG_NAME) as FormArray;
  }

  buildForm(qConfig: QuestionaireConfig[]): void {
    this.formConfig = qConfig.length ? [...qConfig] : [];
    this.total = this.formConfig.length;
    const f = this.formArray.length ? this.formArray.reset() : this.formArray;
    this.formConfig.forEach((config, id) => this.formArray?.push(this.buildQuestionaire(config, id)));
  }

  buildQuestionaire(config: QuestionaireConfig, idx: number): FormGroup {
    return this.fb.group({
      id: config.id ?? idx,
      selected: ''
    });
  }

  setValue(value: string, index: number): void {
    this.formArray.at(index).get('selected')?.setValue(value);
  }

  next(): void {
    this.selectedIndex++;
  }
}
