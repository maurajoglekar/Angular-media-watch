import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }

}
