import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DocsContainerComponent } from './docs-container.component';

describe('DocsContainerComponent', () => {
  let component: DocsContainerComponent;
  let fixture: ComponentFixture<DocsContainerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DocsContainerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
