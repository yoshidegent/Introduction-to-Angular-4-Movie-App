import { Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesAddComponent } from './movies-add/movies-add.component';

export const AppRoutes: Routes = [
    { path: 'movies/add', component: MoviesAddComponent },
    { path: 'movies/:id', component: MoviesDetailComponent },
    { path: '', component: MoviesListComponent }
]
