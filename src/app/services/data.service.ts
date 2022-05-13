import { Http } from '@angular/http';

import { catchError, throwError } from 'rxjs';
import { map } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';


export class DataService {

    constructor(private url: any, private http: Http) { }

    getAll() {
        return this.http.get(this.url)
            .pipe(
                map(res => res.json()),
                catchError(this.handleError)
            )

    }

    create(resource: any) {
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(
                map(res => res.json()),
                catchError(this.handleError)
            )
    }

    update(resouce: any) {
        return this.http.patch(this.url + '/' + resouce.id, JSON.stringify({ isRead: true }))
            .pipe(
                map(res => res.json()),
                catchError(this.handleError)
            )
    }

    delete(id: number) {
        return this.http.delete(this.url + '/' + id)
            .pipe(
                map(res => res.json()),
                catchError(this.handleError)
            )
    }

    handleError(err: Response) {
        if (err.status === 404) {
            return throwError(new NotFoundError());
        }
        if (err.status === 400) {
            return throwError(new BadInput(err.json()));
        }
        return throwError(new AppError(err));
    }

}
