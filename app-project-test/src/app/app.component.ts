import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  styles: [`
    h3 {
      color: darkblue;
    }
  `]
})
export class AppComponent {
  name = 'Jairo Doni';
}
