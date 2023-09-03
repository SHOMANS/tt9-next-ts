export interface IPost {
  id?: number;
  title: string;
  body: string;
}

export interface IPostsState {
  posts: IPost[];
  isLoading: boolean;
  errorMessage: string;
  post: IPost | null;
}
