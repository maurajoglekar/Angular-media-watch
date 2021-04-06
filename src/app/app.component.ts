import { Component } from '@angular/core';

// template and styles can be used instead of templateUrl and stylesUtls
// to put the html and CSS direclty here
@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mediaWatch';
}
