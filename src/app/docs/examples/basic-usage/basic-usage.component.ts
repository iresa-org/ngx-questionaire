import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormApi, QuestionaireConfig } from '@iresa/ngx-questionaire-form';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html',
  styleUrls: ['./basic-usage.component.scss']
})
export class BasicUsageComponent {
  formApi!: FormApi;
  formConfig: QuestionaireConfig[] = [
    { question: 'What is your favorite color?', options: [{ label: 'Red', value: 'red' }, { label: 'Yellow', value: 'yellow' }, { label: 'Blue', value: 'blue' }, { label: 'Orange', value: 'orange' }] },
    { question: 'What is your favorite pet?', options: [{ label: 'Dog', value: 'dog' }, { label: 'Cat', value: 'cat' }, { label: 'Fish', value: 'fish' }, { label: 'Snake', value: 'snake' }] },
    { question: 'What time do you wake up?', options: [{ label: '5 AM', value: '5am' }, { label: '6 AM', value: '6am' }, { label: '7 AM', value: '7am' }, { label: '8 AM', value: '8am' }] }
  ];

  get completed() {
    return this.formApi.selectedIndex >= this.formConfig.length
  }

  onFormInit(formApi: FormApi): void {
    this.formApi = formApi;
  }

  questionChange(e: MatRadioChange, idx: number): void {
    this.formApi.setValue(e.value, idx);
    idx === this.formApi.selectedIndex ? this.formApi.next() : this.formApi.selectedIndex;
  }

  resetForm() {
    this.formApi.reset();
  }
}

@NgModule({
  declarations: [BasicUsageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BasicUsageModule { }