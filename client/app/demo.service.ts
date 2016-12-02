import {Injectable} from '@angular/core';
import {Component, OnInit, Input, OnChanges } from '@angular/core';
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "@angular/http";
import { Survey }           from './survey';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DemoService {
    
    constructor(private http:Http) {
    }
//Headers =  "*";
    // Uses http.get() to load a single JSON file
    getSurvey() : Observable<Survey[]> {
        
        // const headers = new Headers();
        // //let headers = new Headers( {'Access-Control-Allow-Origin': '*'});
        // headers.append('Access-Control-Allow-Headers', 'Content-Type');
        // headers.append('Access-Control-Allow-Methods', 'GET');
        
        // headers.append('Access-Control-Allow-Origin', '*');
        
        

        return this.http.get('app/data.json').map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        //, {headers: headers});
    }

   
}
