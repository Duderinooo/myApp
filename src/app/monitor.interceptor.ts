import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, retry, switchMap, throwError, timer } from 'rxjs';

@Injectable()
export class MonitorInterceptor implements HttpInterceptor {

  constructor(private http: HttpClient){}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(retry({count: 2, delay: this.shouldRetry}));
  }

  shouldRetry(error: HttpErrorResponse){
    if (error.status === 401) {
      return timer(1000);
    }
    throw error;
  }

}
