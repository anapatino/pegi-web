import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServerResponse } from '../../models/response';
import { CreateSubLine, SubLineResponse } from '../lines/models/subline';

@Injectable({
  providedIn: 'root',
})
export class SubLinesService {
  private model = 'investigation-sublines';

  constructor(private httpClient: HttpClient) {}

  getUrl(id: string = ''): string {
    return `${environment.BASE_URL}/${this.model}/${id}`;
  }

  getSubLine(): Observable<ServerResponse<SubLineResponse[]>> {
    return this.httpClient.get<ServerResponse<SubLineResponse[]>>(
      this.getUrl()
    );
  }

  getSubLineByLineCode(
    code: number
  ): Observable<ServerResponse<SubLineResponse[]>> {
    return this.httpClient.get<ServerResponse<SubLineResponse[]>>(
      this.getUrl(`line/${code}`)
    );
  }

  saveSubLine(
    subLine: CreateSubLine
  ): Observable<ServerResponse<CreateSubLine>> {
    return this.httpClient.post<ServerResponse<CreateSubLine>>(
      this.getUrl(),
      subLine
    );
  }
}
