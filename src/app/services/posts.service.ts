import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  protected url = 'http://localhost:3000';

  getPosts(): Observable<any> {
    return this.http.get(`${this.url}/posts`).pipe(
      take(1),
      map((res) => res)
    );
  }
}
