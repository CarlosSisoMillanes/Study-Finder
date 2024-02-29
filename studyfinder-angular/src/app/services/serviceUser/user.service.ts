import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { }

  login( email: string, password: string): Observable<any> {


    console.log(email);
    console.log('pass:::.'+password);

    return this.http.post('http://127.0.0.1:8000/login?email='+email+'&password='+password, {

    });
  }
  register(nombre: string, apellidos:string,email: string, password: string): Observable<any> {

    return this.http.post('http://127.0.0.1:8000/register?&nombre='+nombre+'&apellidos='+apellidos+'&email='+email+'&password='+password, {

    });
  }}
