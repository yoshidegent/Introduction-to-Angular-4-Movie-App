import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';
import { Movie } from './movie.model';
import { MovieSearchResult } from './movieSearchResult.model';

@Injectable()
export class MoviesService {

  private baseUri = environment.apiUrl;

  constructor(private http: Http) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get(this.baseUri)
      .map(x => x.json());
  }

  getMovie(id: number): Observable<Movie> {
    const uri = this.baseUri + '/' + id;
    return this.http.get(uri)
      .map(x => x.json());
  }

  lookupMovie(title: string): Observable<MovieSearchResult[]> {
    const uri = this.baseUri + '/search?title=' + title;
    return this.http.get(uri)
      .map(x => x.json());
  }

  addMovie(searchId: number): Observable<Movie> {
    const data = { searchId: searchId };
    return this.http.post(this.baseUri, data)
      .map(x => x.json());
  }

  seenMovie(id: number, seen: boolean) {
    let uri = this.baseUri + '/' + id;
    if (seen) {
      uri += '/seen';
    } else {
      uri += '/notseen';
    }
    return this.http.put(uri, {});
  }

  delete(id: number) {
    const uri = this.baseUri + '/' + id;
    return this.http.delete(uri);
  }

}
