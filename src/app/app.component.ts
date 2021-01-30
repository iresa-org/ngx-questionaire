import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  logo = 'assets/logo.png';

  theme = 'default-theme';

  constructor(private overlayContainer: OverlayContainer) { }

  ngOnInit(): void {
    this.updateOverlayTheme();
  }

  updateOverlayTheme(): void {
    const classlist = this.overlayContainer.getContainerElement().classList;
    classlist.add(this.theme);
  }
}
