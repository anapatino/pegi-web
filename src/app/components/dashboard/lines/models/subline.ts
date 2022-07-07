import { AreaResponse } from './thematic-area';

export interface CreateSubLine {
  name: string;
  lineCode: number;
}

export interface SubLineResponse {
  name: string;
  code: number;
  thematicAreas: AreaResponse[];
}
