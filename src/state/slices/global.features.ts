import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CrudService from '../../services/ajax.service';
import { IPostsResponse, IPost } from '../../constants/interfaces.constant';
export type RootState = {
  global: typeof initialState;
};

const getPostsService = new CrudService<IPost>();

export const getPosts = createAsyncThunk(
  'post/getPosts',
  async ({ page, perPage }: { page: number; perPage: number }) => {
    try {
      const response = await getPostsService.getAll(page, perPage);
      const totalPosts = response.headers['x-total-count'];
      const data: IPostsResponse = {
        posts: response.data,
        totalPosts: parseInt(totalPosts, 10) || 0,
      };
      return data;
    } catch (err) {
      throw err;
    }
  }
);

export const deletePost = createAsyncThunk(
  'post/deletePost',
  async (postId: number) => {
    try {
      await getPostsService.delete(postId);
      return postId;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  counter: 0,
  loading: false,
  posts: [] as IPost[],
  error: '',
  totalPosts: 0,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.posts = payload.posts;
      state.totalPosts = payload.totalPosts;
    });

    builder.addCase(getPosts.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || 'An error occurred';
    });

    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deletePost.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.posts = state.posts.filter((post) => post.id !== payload);
      state.totalPosts -= 1;
    });

    builder.addCase(deletePost.rejected, (state, { error }) => {
      state.loading = false;
      state.error =
        error.message || 'An error occurred while deleting the post';
    });
  },
});

export const { increment, decrement } = globalSlice.actions;
export default globalSlice.reducer;
