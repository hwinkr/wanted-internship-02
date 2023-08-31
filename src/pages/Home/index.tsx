import React from 'react';
import { styled } from 'styled-components';
import useRouter from '../../hooks/useRouter';
import PATH from '../../constants/path';

const Home = () => {
  const { routerTo } = useRouter();
  const routerToIssuePage = () => routerTo(PATH.ISSUES);

  return (
    <HomeContainer onClick={routerToIssuePage}>
      <ReactImage src="/assets/Logo.svg"></ReactImage>
      <Text>Go React Issue</Text>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  height: calc(100vh - 81px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ReactImage = styled.img`
  width: 200px;
  height: 200px;
`;

const Text = styled.span`
  font-size: 32px;
  font-weight: bold;
`;
