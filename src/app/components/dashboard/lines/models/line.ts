import { SubLineResponse } from './subline';

export interface CreateLine {
  name: string;
}

export interface LineResponse {
  name: string;
  code: number;
  subLine: SubLineResponse[];
}

export const emptyLine: CreateLine = {
  name: '',
};
