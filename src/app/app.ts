import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Heading } from './heading/heading';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Heading],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
