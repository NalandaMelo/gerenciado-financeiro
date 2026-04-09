import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { UserCredential } from '../components/interfaces/user-credential';
import { AuthTokenResponse } from '../components/interfaces/auth-token-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(payload: UserCredential): Observable<AuthTokenResponse> {
    if (payload.user === 'admin' && payload.password === '123') {
      return of({ token: 'fake-token' });
    }
    return throwError(
      () => 
        new HttpErrorResponse ({ 
          status: 401, 
          statusText: 'Unauthorized' 
        }));
  }
}