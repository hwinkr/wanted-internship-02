import React from 'react';
import { styled } from 'styled-components';

const AdComponent = () => {
  return (
    <AdLink href="https://www.wanted.co.kr/" target="_blank">
      <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=130&q=100" />
    </AdLink>
  );
};

export default AdComponent;

const AdLink = styled.a`
  display: flex;
  width: 780px;
  padding: 10px;
  height: 50px;
  align-items: center;
  justify-content: center;

  text-align: center;
  margin: 0 auto;

  border-radius: 10px;
`;
