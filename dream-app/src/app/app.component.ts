 import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //assign value of root in index.html file --- has to be unique
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
