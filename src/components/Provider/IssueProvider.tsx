import React, { useEffect, useReducer } from 'react';
import { IssueListItem } from '../../types/issues';
import axios from 'axios';
import IssueContext from '../../contexts/Issue';
import { Outlet } from 'react-router-dom';
import fetchReactIssue from '../../apis/get-issue';

interface IssueState {
  issues: IssueListItem[] | [];
  currentPage: number;
  isLoading: boolean;
  error: string;
  setNextPage: () => void;
}

const ACTION_TYPES = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  NEXT_PAGE: 'NEXT_PAGE',
} as const;

interface ACTION {
  type: (typeof ACTION_TYPES)[keyof typeof ACTION_TYPES];
  payload: Omit<IssueState, 'isLoading'>;
}

const issueStateReducer = (state: IssueState, action: ACTION) => {
  switch (action.type) {
    case ACTION_TYPES.NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    case ACTION_TYPES.SUCCESS:
      return { ...state, isLoading: false, issues: action.payload.issues };
    case ACTION_TYPES.ERROR:
      return { ...state, error: action.payload.error };
    case ACTION_TYPES.LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

const initialState: IssueState = {
  issues: [],
  currentPage: 1,
  isLoading: false,
  error: '',
  setNextPage: () => {
    return;
  },
};
const IssueProvider = () => {
  const [state, dispatch] = useReducer(issueStateReducer, initialState);
  const setNextPage = () => dispatch({ payload: { ...state }, type: ACTION_TYPES.NEXT_PAGE });

  useEffect(() => {
    dispatch({ payload: { ...state }, type: ACTION_TYPES.LOADING });
    const getReactIssueList = async () => {
      try {
        const newIssues = await fetchReactIssue(state.currentPage);
        dispatch({
          payload: { ...state, issues: [...state.issues, ...newIssues] },
          type: ACTION_TYPES.SUCCESS,
        });
      } catch (error) {
        if (axios.isAxiosError(error) || error instanceof Error) {
          dispatch({ payload: { ...state, error: error.message }, type: ACTION_TYPES.ERROR });
        }
      }
    };
    getReactIssueList();
  }, [state.currentPage]);

  return (
    <IssueContext.Provider value={{ ...state, setNextPage }}>
      <Outlet />
    </IssueContext.Provider>
  );
};

export default IssueProvider;
