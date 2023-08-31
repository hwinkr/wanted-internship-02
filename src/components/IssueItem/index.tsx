import React from 'react';
import { IssueListItem } from '../../types/issues';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

interface IssueItemProps {
  issue: IssueListItem;
}

const IssueItem = ({
  issue: {
    number,
    title,
    comments,
    created_at,
    user: { login, avatar_url },
    body,
  },
}: IssueItemProps) => {
  return (
    <ItemContainer>
      <StyledLink
        to={`${number}`}
        state={{ number, title, comments, created_at, login, avatar_url, body }}
      >
        <LeftContent>
          <IssueTitle>{title}</IssueTitle>
          <IssueExtraInfo>
            <span>#{number}</span>
            <span>{created_at.slice(0, 10)}</span>
            <span>by {login}</span>
          </IssueExtraInfo>
        </LeftContent>
        <RightContent>
          <span>{comments}</span>
        </RightContent>
      </StyledLink>
    </ItemContainer>
  );
};

export default React.memo(IssueItem);

const ItemContainer = styled.li`
  list-style: none;
  padding: 10px;
  background-color: gray;
  border-radius: 10px;

  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: black;
  height: 70px;
  gap: 40px;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`;
const RightContent = styled.div``;
const IssueExtraInfo = styled.div``;
const IssueTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
`;
