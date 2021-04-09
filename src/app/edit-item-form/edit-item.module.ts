import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditItemFormComponent } from './edit-item-form.component';
import { editItemRouting } from './edit-item.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    editItemRouting
  ],
  declarations: [
    EditItemFormComponent
  ]
})
export class EditItemModule {}