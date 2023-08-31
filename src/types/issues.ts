export interface IssueListItem {
  number: number;
  title: string;
  user: {
    login: string;
    avatar_url: string;
  };
  comments: number;
  body: string;
  created_at: string;
}
