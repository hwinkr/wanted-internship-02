import React from 'react';
import { styled } from 'styled-components';
import useRouter from '../../hooks/useRouter';

interface ErrorPageProps {
  imagePath?: string;
  error: string;
}

const Error = ({ imagePath = '/assets/Error.png', error }: ErrorPageProps) => {
  const { routerTo } = useRouter();
  const routerToHome = () => routerTo('/');

  return (
    <Container>
      <ErrorImage src={imagePath} />
      <ErrorMessage>{error}</ErrorMessage>
      <Button onClick={routerToHome}>Go Home</Button>
    </Container>
  );
};

export default Error;

const Container = styled.div`
  height: calc(100vh - 81px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorImage = styled.img`
  height: 400px;
  width: 400px;
`;

const ErrorMessage = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #87ceeb;
  border-radius: 10px;
  font-weight: bold;
`;
