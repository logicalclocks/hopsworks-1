import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private userUrl = `${environment.apiUrl}`;

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<any> {
        const url = `${this.userUrl}/admin/users`;
        return this.http.get<any>(url)
            .pipe(
                catchError(this.handleError([]))
            );
    }

    getUser(id: any): Observable<any> {
        const url = `${this.userUrl}/admin/users/${id}`;
        return this.http.get<any>(url)
            .pipe(
                catchError(this.handleError([]))
            );
    }

    private handleError<T> (result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            return of(result as T);
        };
    }
}
