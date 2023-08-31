import axios from 'axios';
import http from './http';

const fetchReactIssue = async (page: number) => {
  try {
    const { data } = await http.get(
      `/repos/facebook/react/issues?state=open&sort=comments&page=${page}`,
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error;
    }
  }
};

export default fetchReactIssue;
