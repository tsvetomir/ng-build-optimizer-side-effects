import { Component } from '@angular/core';

import { Bar } from './foo/bar';
import './foo/baz';

const bar = Bar.baz();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
