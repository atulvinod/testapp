import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyModule } from './mymodule/mymodule';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'testapp';
}
