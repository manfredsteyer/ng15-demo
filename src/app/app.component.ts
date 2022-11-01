import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo15';
  delay = 0;
  avoided(count: number): void {
    console.log('avoided', count);
  }
}
