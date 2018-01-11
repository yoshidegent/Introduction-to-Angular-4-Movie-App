import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { MoviesService } from './movies.service';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesAddComponent } from './movies-add/movies-add.component';
import { ButtonBackComponent } from './button-back/button-back.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieHeaderComponent,
    MoviesListComponent,
    MoviesDetailComponent,
    MoviesAddComponent,
    ButtonBackComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
