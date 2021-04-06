import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  constructor() { }

  name = 'The Redemption';
  
  ngOnInit(): void {
  }
 
  wasWatched() {
    return true;
  }
}
