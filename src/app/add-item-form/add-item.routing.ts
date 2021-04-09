
import { Routes, RouterModule } from '@angular/router';
import { AddItemFormComponent } from './add-item-form.component';

const addItemRoutes: Routes = [
  { path: 'add', component: AddItemFormComponent }
];

export const addItemRouting = RouterModule.forChild(addItemRoutes);