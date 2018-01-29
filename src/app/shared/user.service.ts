import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    constructor(@Injectable()private http: HttpClient) { }
    
    get() {
        return this.http.get('https://api.github.com/users');
    }
}