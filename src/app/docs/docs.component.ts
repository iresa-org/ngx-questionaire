import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { IMG_FEATURES } from './docs.component.list';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocsComponent implements OnInit {
  examples = IMG_FEATURES;
  currentSection$ = new BehaviorSubject<string>(IMG_FEATURES[0].id);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  onSectionChange(sectionId: string) {
    this.currentSection$.next(sectionId);
  }

  scrollTo(section = '') {
    this.document?.querySelector(`# ${section}`)?.scrollIntoView();
  }
}
