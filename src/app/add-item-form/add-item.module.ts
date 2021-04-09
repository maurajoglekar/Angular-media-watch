import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaItemFormComponent } from './media-item-form.component';
import { addItemRouting } from './add-item.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    addItemRouting
  ],
  declarations: [
    MediaItemFormComponent
  ]
})
export class AddItemModule {}