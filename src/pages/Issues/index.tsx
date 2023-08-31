import React from 'react';
import Error from '../Error';
import IssueItem from '../../components/IssueItem';
import { styled } from 'styled-components';
import useReactIssue from '../../hooks/useReactIssue';
import useObserver from '../../hooks/useObserver';
import AdComponent from '../../components/AdComponent';

const Issues = () => {
  const { issues, isLoading, error, setNextPage } = useReactIssue();
  const ref = useObserver(setNextPage);
  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <IssuesContainer>
        {issues.map((issue, index) => (
          <div key={index}>
            {index % 5 === 4 && <AdComponent />}
            <IssueItem issue={issue} />
          </div>
        ))}
        {isLoading ? <Loading src="/assets/Loading.svg"></Loading> : <div ref={ref}></div>}
      </IssuesContainer>
    </>
  );
};

export default Issues;

const IssuesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 800px;
  margin: 0 auto;
`;

const Loading = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 auto;
`;
