import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  movie: Movie;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.moviesService.getMovie(id)
      .subscribe(x => this.movie = x);
  }

  hasSeen(seen: boolean) {
    this.moviesService.seenMovie(this.movie.id, seen)
      .subscribe(x => this.movie.seen = seen);
  }

  delete() {
    this.moviesService.delete(this.movie.id)
      .subscribe(x => this.router.navigate(['']));
  }
}
