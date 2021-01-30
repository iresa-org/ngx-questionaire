import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormApi, QuestionaireConfig } from '@iresa/ngx-questionaire-form';

@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html',
  styleUrls: ['./basic-usage.component.scss']
})
export class BasicUsageComponent {
  formApi!: FormApi;
  selectedIndex!: number | void;
  formConfig: QuestionaireConfig[] = [
    { question: 'What is your favorite color?', options: [{ label: 'Red', value: 'red' }, { label: 'Yellow', value: 'yellow' }, { label: 'Blue', value: 'blue' }, { label: 'Orange', value: 'orange' }] },
    { question: 'What is your favorite color?', options: [{ label: 'Red', value: 'red' }, { label: 'Yellow', value: 'yellow' }, { label: 'Blue', value: 'blue' }, { label: 'Orange', value: 'orange' }] },
    { question: 'What is your favorite color?', options: [{ label: 'Red', value: 'red' }, { label: 'Yellow', value: 'yellow' }, { label: 'Blue', value: 'blue' }, { label: 'Orange', value: 'orange' }] }
  ];

  onFormInit(formApi: FormApi): void {
    this.formApi = formApi;
  }

  questionChange(e: MatRadioChange, idx: number): void {
    this.formApi.setValue(e.value, idx);
    this.selectedIndex = idx === this.formApi.selectedIndex ? this.formApi.next() : this.formApi.selectedIndex;
  }
}
