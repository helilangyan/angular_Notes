import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IUser } from 'src/app/interfaces/iuser';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  validateCredentials(id: string, password: string): Observable<string> {
    var userObj: IUser;
    userObj = { emailId: id, userPassword: password, gender: null, roleId: null, dateOfBirth: null, address: null };
    return this.http.post<string>('http://localhost:11990/api/user/ValidateUserCredentials', userObj).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }
}
 
 
