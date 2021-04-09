
import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';

const addItemRoutes: Routes = [
  { path: 'add', component: MediaItemFormComponent }
];

export const addItemRouting = RouterModule.forChild(addItemRoutes);