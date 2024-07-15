import { computed, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

export type Response = {data:string}
@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getPravin = (): Observable<string>=>{
    return this.http.get<Response>('https://my-app-be-9qgo.onrender.com/pravin').pipe(map((x:Response) => x.data))
  };
}