import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DetailIssue from './pages/DetailIssue';
import PATH from './constants/path';
import IssueProvider from './components/Provider/IssueProvider';
import Issues from './pages/Issues';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={PATH.ROOT} element={<Home />} />
        <Route element={<IssueProvider />}>
          <Route path={PATH.ISSUES} element={<Issues />} />
        </Route>
        <Route path={PATH.DETAIL_ISSUE} element={<DetailIssue />} />
        <Route
          path={PATH.ERROR}
          element={<Error imagePath="/assets/Error404.jpg" error="Page Not Found!" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
