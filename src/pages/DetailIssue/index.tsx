import React from 'react';
import { useLocation } from 'react-router-dom';
import Error from '../Error';
import { styled } from 'styled-components';
import MarkdownPreview from '@uiw/react-markdown-preview';

interface DetailIssue {
  state: {
    title: string;
    number: number;
    login: string;
    created_at: string;
    comments: string;
    body: string;
    avatar_url: string;
  };
}

const DetailIssue = () => {
  const { state } = useLocation() as DetailIssue;
  if (!state) return <Error error="잘못된 요청 입니다." />;
  const { title, number, login, created_at, comments, body, avatar_url } = state;
  const slicedCreatedTime = created_at.slice(0, 10);
  return (
    <Container>
      <DetailHeader>
        <InfoContainer>
          <IssueMainInfo>
            <IssueTitle>{title}</IssueTitle>
            <IssueNumber>#{number}</IssueNumber>
          </IssueMainInfo>
          <IssueSubInfo>
            <UserImage src={avatar_url} />
            <UserName>{login}</UserName>
            <span>comment on </span>
            <CreatedTime>{slicedCreatedTime}</CreatedTime>
          </IssueSubInfo>
        </InfoContainer>
        <IssueComment>{comments} comments</IssueComment>
      </DetailHeader>
      <DeatilBody>{body && <MarkdownPreview source={body} />}</DeatilBody>
    </Container>
  );
};

export default DetailIssue;

const Container = styled.section`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
`;

const DetailHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoContainer = styled.div``;

const IssueMainInfo = styled.div`
  display: flex;
  align-items: center;
`;
const IssueTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
`;
const IssueNumber = styled.span`
  font-size: 24px;
`;
const IssueSubInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  margin-right: 3px;
`;
const UserName = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 3px;
`;
const CreatedTime = styled.span`
  margin-left: 3px;
  font-size: 18px;
  font-weight: bold;
`;

const IssueComment = styled.span`
  font-weight: bold;
`;

const DeatilBody = styled.main`
  margin-top: 10px;
`;
