// src/app/hero.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';


//import { Hero } from './hero'; // Assuming you have a Hero interface or class
import { Observable, of } from 'rxjs'; // For asynchronous data


@Injectable({
    providedIn: 'root' // Makes the service a singleton and available throughout the application
})
export class DiveSiteService {

    //todo: error handing.. use interceptor
   
    constructor(
        private http: HttpClient
    ){
        console.log("DiveSiteService - ")
        console.log(environment.baseURL)
        console.log(environment.envName)
    }
    private apiUrl: string = environment.baseURL

    getData(): Observable<any[]> {
        console.log("DiveSiteService - getData()")
        return this.http.get<any[]>(this.apiUrl + '/diveSites')
        .pipe(
            res => res
            //catchError(this.handleError)
        );
    }

}