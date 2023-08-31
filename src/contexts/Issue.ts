import { createContext } from 'react';
import { IssueListItem } from '../types/issues';

interface IssueState {
  issues: IssueListItem[] | [];
  currentPage: number;
  isLoading: boolean;
  error: string;
  setNextPage: () => void;
}

const IssueContext = createContext<IssueState | null>(null);

export default IssueContext;
