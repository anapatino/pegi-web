import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerResponse } from 'src/app/components/models/response';
import { environment } from 'src/environments/environment';
import { Login } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private model = 'auth';

  constructor(private httpClient: HttpClient) {}

  getUrl(id: string = ''): string {
    return `${environment.BASE_URL}/${this.model}/${id}`;
  }

  login(login: Login): Observable<ServerResponse<any>> {
    return this.httpClient.post<ServerResponse<any>>(
      this.getUrl(`login/`),
      login
    );
  }
}
