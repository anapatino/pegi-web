export interface CreateMember {
  document: string;
  identificationType: string;
  name: string;
  programCode: number;
  creditNumber: string;
  phone: string;
  mail: string;
}

export const emptyMember: CreateMember = {
  document: '',
  identificationType: '',
  name: '',
  programCode: 0,
  creditNumber: '',
  phone: '',
  mail: '',
};
