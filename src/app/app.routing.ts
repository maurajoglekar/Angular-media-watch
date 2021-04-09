import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { EditItemFormComponent } from './edit-item-form/edit-item-form.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';

const appRoutes: Routes = [
  { path: 'add', component: MediaItemFormComponent },
  { path: 'edit/:id', component: EditItemFormComponent},
  { path: ':medium', component: MediaItemListComponent },  // route parameter
  { path: '', pathMatch: 'full', redirectTo: 'all' }       // default route
];

export const routing = RouterModule.forRoot(appRoutes);