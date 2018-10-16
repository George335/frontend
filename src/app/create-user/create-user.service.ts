import { HttpClient } from '@angular/common/http';
import { UserModel } from './../model/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { RestResponse } from 'src/app/model/restResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http:HttpClient) { }

  public validate(user: UserModel): boolean {
    let isValid = true;

    if(!user.name){
      isValid = false;
    }
    return isValid;
  }

  public saveOrUpdate(user: UserModel): Observable<RestResponse>{
    return this.http.post<RestResponse>("http://localhost:9095/saveOrUpdate", JSON.stringify(user));
  }
}
