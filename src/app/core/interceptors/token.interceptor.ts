import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import environment from 'src/environments/environment';

@Injectable()
class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({
      params: request.params.append('key', environment.youtubeApiKey)
    })
    return next.handle(newRequest);
  }
}
export default TokenInterceptor;
