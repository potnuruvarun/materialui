import { Injectable } from '@angular/core';
import { HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenheader=req.clone({
      setHeaders:{
        Authorization:"bearer "+localStorage.getItem("token")

      }
    })
    return next.handle(tokenheader);
   
  }
}
