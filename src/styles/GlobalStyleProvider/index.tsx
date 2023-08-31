import React from 'react';
import GlobalStyle from '../Global/global';

interface GlobalStyleProviderProps {
  children: React.ReactNode;
}

const GlobalStyleProvider = ({ children }: GlobalStyleProviderProps) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default GlobalStyleProvider;
