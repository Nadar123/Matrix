export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostsResponse {
  posts: IPost[];
  totalPosts: number;
}
