import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'Authorization': 'Bearer eyJraWQiOiIxIiwidHlwIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJhdWQiOiJhcGkiLCJzdWIiOiJtZWIxMDAwMCIsIm5iZiI6MTU0MjQ1NTY1NSwicmVuZXdhYmxlIjp0cnVlLCJleHBMZWV3YXkiOjkwMCwicm9sZXMiOlsiSE9QU19BRE1JTiJdLCJpc3MiOiJzbnVycmFuLnNpY3Muc2UiLCJleHAiOjE1NDI0NTc0NTUsImlhdCI6MTU0MjQ1NTY1NSwianRpIjoiMTRmMzJjMWItZTVkMS00MzQ2LWE4YzMtNWMxZDBjNmZiMTk0In0.n8vKsrsdBAkl24Hfxg6Ez7j7YzxfbK0_xbxNHXfSycXlKWdSynXRi5ywrOHbPVD96M1IQnA0EbkznTJthtZvoA',
                'Content-Type': 'application/json'
            }
        });

        return next.handle(req);
    }
}