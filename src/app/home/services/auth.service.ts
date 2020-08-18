import { Injectable } from '@angular/core';
import { User } from '../../models';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/Operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    login(username: string, password: string) {
        return this.http.post<any>(`/users/authenticate`, { username, password })
            .pipe(map(user => { console.log('user', user, user.token);
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
          return user;
        }));


    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null)
    }

  // checkuser(user:string,pass:string){
    //     if(user == 'admin'&& pass== "admin123"){
    //         window.localStorage.setItem('user','admin')
    //             return true;

    //     }
    //     else{
    //         return false;
    //     }
    // }

}
