import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() mediaItem;
  
  OnDelete() {
    console.log('deleted');
  }
}
