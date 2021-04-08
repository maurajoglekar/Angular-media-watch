import { Routes } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';

const appRoutes: Routes = [
  { path: 'add', component: MediaItemFormComponent },
  { path: ':medium', component: MediaItemListComponent },  // route parameter
  { path: '', pathMatch: 'full', redirectTo: 'all' }       // default route
];