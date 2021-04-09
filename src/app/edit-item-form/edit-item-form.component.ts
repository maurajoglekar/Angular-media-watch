import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MediaItemService, MediaItem } from '../media-item.service';
import { lookupListToken } from '../providers'

@Component({
  selector: 'mw-edit-item-form',
  templateUrl: './edit-item-form.component.html',
  styleUrls: ['./edit-item-form.component.css']
})
export class EditItemFormComponent implements OnInit {
  form: FormGroup;
  mediaItem: MediaItem;

  // by using private below, the var is created and initialized in the class
  constructor(private formBuilder: FormBuilder, 
    private mediaItemService : MediaItemService,
    @Inject(lookupListToken) public lookupLists,
    private router: Router,
    private activatedRoute: ActivatedRoute,) {}

  // constructor injection brought in service instance
  ngOnInit() {
    this.activatedRoute.paramMap
    .subscribe(paramMap => {
      let id = paramMap.get('id');
      this.getMediaItem(id);
    });
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control(this.mediaItem.medium),
      name: this.formBuilder.control(this.mediaItem.name, Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(this.mediaItem.category),
      year: this.formBuilder.control(this.mediaItem.year),
    });
  }

  getMediaItem(id) {
    this.mediaItemService.getById(id)
      .subscribe(mediaItems => {
        this.mediaItem = mediaItems[0];
      });
  }

  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1800;
    const maxYear = 2500;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { year: {
        min: minYear,
        max: maxYear
      }
     };
    }
  }

  onSubmit(mediaItem) {
    mediaItem.id = this.mediaItem.id;
    // must call subscribe to kick it off
    this.mediaItemService.update(mediaItem)
    .subscribe(() => {
      this.router.navigate(['/', mediaItem.medium]);
    });
  }
}
