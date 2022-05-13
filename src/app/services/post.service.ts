import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { catchError, map, Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://abcjsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post: any) {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(
        catchError((err: Response) => {
          if (err.status === 400) {
            return throwError(new BadInput(err.json()));
          }
          return throwError(new AppError(err));
        })
      )
  }

  updatePost(post: any) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .pipe(
        catchError((err: Response) => {
          if (err.status === 400) {
            return throwError(new BadInput(err.json()));
          }
          return throwError(new AppError(err));
        })
      )
  }

  deletePost(id: number) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError((err: Response) => {
          if (err.status === 404) {
            return throwError(new NotFoundError());
          }
          return throwError(new AppError(err));
        })
      )
  }
}
