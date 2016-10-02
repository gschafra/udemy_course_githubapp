import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubService {
    private username:string;

    constructor(private _http:Http) { 
        console.log('Github service ready...');
        this.username = 'gschafra';
    }
    
    getUser() {
        return this._http.get('http://api.github.com/users/'+this.username).map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/'+this.username+'/repos')
            .map(res => res.json());
    }
}