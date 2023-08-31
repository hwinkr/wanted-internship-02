import { useContext } from 'react';
import IssueContext from '../contexts/Issue';

const useReactIssue = () => {
  const context = useContext(IssueContext);

  if (!context) {
    throw new Error('IssueContext does not exists.');
  }

  return context;
};

export default useReactIssue;
