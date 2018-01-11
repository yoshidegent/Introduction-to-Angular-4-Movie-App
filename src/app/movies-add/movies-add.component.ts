import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';
import { MovieSearchResult } from '../movieSearchResult.model';

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {

  foundMovies: MovieSearchResult[];

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
  }

  search(searchParams: { title: string }) {
    this.moviesService.lookupMovie(searchParams.title)
      .subscribe(x => this.foundMovies = x);
  }

  add(movie: MovieSearchResult) {
    this.moviesService.addMovie(movie.searchId)
      .subscribe(x => {
        this.router.navigate(['/movies', x.id]);
      });
  }
}
