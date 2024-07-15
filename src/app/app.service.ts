import { computed, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getPravin = (): Observable<string>=>{
    return this.http.get<string>('https://my-app-be-9qgo.onrender.com/pravin').pipe(tap((x)=>{console.log('XXX',x)}))
  };
}