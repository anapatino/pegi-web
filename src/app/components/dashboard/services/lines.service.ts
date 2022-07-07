import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateLine, LineResponse } from '../lines/models/line';

@Injectable({
  providedIn: 'root',
})
export class LinesService {
  private model = 'lines-investigation';

  constructor(private httpClient: HttpClient) {}

  getUrl(id: string = ''): string {
    return `${environment.BASE_URL}/${this.model}/${id}`;
  }

  getLines(): Observable<LineResponse[]> {
    return this.httpClient.get<LineResponse[]>(this.getUrl());
  }

  saveLine(line: CreateLine) {
    return this.httpClient.post(this.getUrl(), line);
  }
}
