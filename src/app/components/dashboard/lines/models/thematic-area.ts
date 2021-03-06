export interface CreateArea {
  subLineCode: number;
  name: string;
}

export interface AreaResponse {
  name: string;
  code: number;
}

export const emptyArea: CreateArea = {
  subLineCode: 0,
  name: '',
};
