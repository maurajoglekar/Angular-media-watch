import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddItemFormComponent } from './add-item-form.component';
import { addItemRouting } from './add-item.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    addItemRouting
  ],
  declarations: [
    AddItemFormComponent
  ]
})
export class AddItemModule {}