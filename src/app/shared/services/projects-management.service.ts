import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProjectsManagementService {
    private projectUrl = `${environment.apiUrl}`;

    constructor(private http: HttpClient) {
    }

    getProjects(): Observable<any> {
        const url = `${this.projectUrl}/admin/projects`;
        return this.http.get<any>(url)
            .pipe(
                catchError(this.handleError<any>([]))
            );
    }

    updateProject(data: any): Observable<any> {
        const url = `${this.projectUrl}/admin/projects`;
        return this.http.put<any>(url, data)
            .pipe(
                catchError(this.handleError<any>([]))
            );
    }

    forceRemoveProject(id: any): Observable<any> {
        const url = `${this.projectUrl}/admin/projects/${id}`;
        return this.http.delete<any>(url)
            .pipe(
                catchError(this.handleError<any>([]))
            );
    }

    private handleError<T> (result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            return of(result as T);
        };
    }
}
