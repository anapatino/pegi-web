import { CreateMember } from './Member';

export interface CreateProposal {
  title: string;
  dateTime: Date;
  researchGroup: string;
  approachProblem: string;
  formulationProblem: string;
  justificationProblem: string;
  generalObjective: string;
  specificObjective: string;
  bibliography: string;
  codeEvaluation: string;
  status: string;
  feedback: string;
  members: CreateMember[];
}

export interface ProposalResponse {
  code: string;
  title: string;
  dateTime: Date;
  researchGroup: string;
  approachProblem: string;
  formulationProblem: string;
  justificationProblem: string;
  generalObjective: string;
  specificObjective: string;
  bibliography: string;
  codeEvaluation: string;
  status: string;
  feedback: string;
  members: CreateMember[];
}

export const emptyProposal: CreateProposal = {
  title: '',
  dateTime: undefined,
  researchGroup: '',
  approachProblem: '',
  formulationProblem: '',
  justificationProblem: '',
  generalObjective: '',
  specificObjective: '',
  bibliography: '',
  codeEvaluation: '',
  status: '',
  feedback: '',
  members: [],
};
