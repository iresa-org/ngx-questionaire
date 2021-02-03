# NGX-QUESTIONAIRE-FORM


[![npm version](https://badge.fury.io/js/%40iresa%2Fngx-questionaire-form.svg)](https://badge.fury.io/js/%40iresa%2Fngx-questionaire-form)
[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

> Questionaire form builder for modern Angular apps

Buidling a long list of questions has never been easier. Demo: https://iresa-org.github.io/ngx-questionaire-form

## Features

- ✅ Display a list of questions via JSON configurations
- ✅ Allow user-generated templates
- ✅ Support single or multiple choice answers

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors-)

## Installation

From your project folder, run `ng add @iresa/ngx-questionaire-form`

This command will import `NgxQuestionaireFormModule` and `BrowserAnimationsModule` into your `AppModule`. If the app doesn't support animation, import `NoopAnimationsModule` instead:

```ts
import { NgxQuestionaireFormModule } from '@iresa/ngx-questionaire-form';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
 
@NgModule({
  ...
  imports: [
    ...
    
    BrowserAnimationsModule // NoopAnimationsModule

    // NgxImagelyModule
    NgxQuestionaireFormModule, 
    ...
  ],
  ...
})
export class AppModule {}
```

Or register `NgxQuestionaireFormModule` to a feature module with following code:

```ts
import { NgxQuestionaireFormModule } from '@iresa/ngx-questionaire-form';
 
@NgModule({
  ...
  imports: [
    ...
    
    // NgxQuestionaireFormModule
    NgxQuestionaireFormModule, 
    ...
  ],
  ...
})
export class FeatureModule {}
```

## Usage

```html
<ngx-questionaire-form 
  [formConfig]="formConfig" 
  (formInit)="onFormInit($event)">

  <!-- Custom template for each question -->
  <div *questionaireTemplate="let questionConfig; let index = index">
    ...
  </div>
</ngx-questionaire-form>
```

```ts
import { FormApi, QuestionaireConfig } from '@iresa/ngx-questionaire-form';
  
  formApi!: FormApi;
  formConfig: QuestionaireConfig[] = [
    { 
      question: 'What is your favorite color?', 
      options: [
        { label: 'Red', value: 'red' }, 
        { label: 'Yellow', value: 'yellow' }, 
        { label: 'Blue', value: 'blue' }, 
        { label: 'Orange', value: 'orange' }]
    },
    ...
  ];

  onFormInit(formApi: FormApi): void {
    this.formApi = formApi;
  }
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/kxbui"><img src="https://avatars2.githubusercontent.com/u/5092371?v=4" width="100px;" alt=""/><br /><sub><b>Khoi Bui</b></sub></a><br /><a href="https://github.com/@iresa/ngx-imagely/commits?author=kxbui" title="Code">💻</a>  <a href="#design-kxbui" title="Design">🎨</a> <a href="https://github.com/@iresa/ngx-imagely/commits?author=kxbui" title="Documentation">📖</a> <a href="#ideas-kxbui" title="Ideas, Planning, & Feedback">🤔</a> <a href="#projectManagement-kxbui" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

This project uses schematics from [@ngneat/lib](https://github.com/ngneat/lib) to generate boilerplate used for open source library. 