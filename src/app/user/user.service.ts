import { UserModel } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class UserService {
  constructor(private http:HttpClient) { }

  public getUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>("http://localhost:9095/rest/users/readAll")
  }
}
