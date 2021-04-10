import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../_models/UserModel';

const AUTH_API = '....';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(
      AUTH_API + 'register',
      JSON.stringify(user),
      httpOptions
    );
  }

}
