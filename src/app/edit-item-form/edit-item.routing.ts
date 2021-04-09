
import { Routes, RouterModule } from '@angular/router';
import { EditItemFormComponent } from './edit-item-form.component';

const editItemRoutes: Routes = [
  { path: 'edit/:id', component: EditItemFormComponent }
];

export const editItemRouting = RouterModule.forChild(editItemRoutes);