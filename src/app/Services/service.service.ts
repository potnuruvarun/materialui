import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  
  login(input:any){
    return this.http.post('http://localhost:5281/api/Login',input)
  }

  alllist()
  {
    return this.http.get('http://localhost:5281/api/Publish/Get');
  }

}
