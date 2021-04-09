import { Routes, RouterModule } from '@angular/router';
import { EditItemFormComponent } from './edit-item-form/edit-item-form.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';

const appRoutes: Routes = [
    {
        path: 'add',
        loadChildren: () => import('./add-item-form/add-item.module').then(m => m.AddItemModule)
    },
    { path: ':medium', component: MediaItemListComponent },  // route parameter
    { path: '', pathMatch: 'full', redirectTo: 'all' }       // default route
];

export const routing = RouterModule.forRoot(appRoutes);