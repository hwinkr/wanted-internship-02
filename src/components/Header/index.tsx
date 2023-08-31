import React from 'react';
import { styled } from 'styled-components';
import PATH from '../../constants/path';
import HEADER_TITLE from '../../constants/header-title';
import useRouter from '../../hooks/useRouter';

const Header = () => {
  const { goBack } = useRouter();
  const getHeaderTitle = () => {
    const currentPathName = window.location.pathname;
    switch (true) {
      case currentPathName === PATH.ROOT:
        return HEADER_TITLE.HOME;
      case currentPathName.startsWith(PATH.ISSUES):
        return HEADER_TITLE.ISSUES;
      default:
        return HEADER_TITLE.ERROR;
    }
  };
  const isHomePage = () => window.location.pathname === '/';

  return (
    <StyledHeader>
      <HeaderContainer>
        {!isHomePage() && <BackButton onClick={goBack}>뒤로가기</BackButton>}
        <HeaderTitle>{getHeaderTitle()}</HeaderTitle>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 10px;
  top: 0;
  z-index: 2;

  text-align: center;
  border-bottom: 1px solid #dee2e6;
  background-color: gray;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const BackButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const HeaderTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto;
`;
