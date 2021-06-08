import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})

export class MainService{
    constructor(private http: HttpClient){}

    url:string = "http://localhost:3000/slides/"

    getInfo(){
        return this.http.get(this.url);
    }
    
    
}