import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServerResponse } from '../../models/response';
import { AreaResponse, CreateArea } from '../lines/models/thematic-area';

@Injectable({
  providedIn: 'root',
})
export class AreasService {
  private model = 'thematic-areas';

  constructor(private httpClient: HttpClient) {}

  getUrl(id: string = ''): string {
    return `${environment.BASE_URL}/${this.model}/${id}`;
  }

  getThematicArea(): Observable<ServerResponse<AreaResponse[]>> {
    return this.httpClient.get<ServerResponse<AreaResponse[]>>(this.getUrl());
  }

  getThematicAreaBySubLineCode(
    code: number
  ): Observable<ServerResponse<AreaResponse[]>> {
    return this.httpClient.get<ServerResponse<AreaResponse[]>>(
      this.getUrl(`subline/${code}`)
    );
  }

  saveThematicArea(
    thematicArea: CreateArea
  ): Observable<ServerResponse<CreateArea>> {
    return this.httpClient.post<ServerResponse<CreateArea>>(
      this.getUrl(),
      thematicArea
    );
  }
}
