import { Component, ViewEncapsulation } from '@angular/core';

// template and styles can be used instead of templateUrl and stylesUtls
// to put the html and CSS direclty here
@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated  //default
})
export class AppComponent {
  title = 'mediaWatch';
  firstMediaItem = {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  };

  onMediaItemDelete(mediaItem) {
    console.log(`clicked delete: ${JSON.stringify(mediaItem)}`);
  }
}
