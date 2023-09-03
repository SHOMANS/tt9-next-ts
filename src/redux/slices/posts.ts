import { IPost, IPostsState } from '@/@types/posts';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from '../store';

const initialState: IPostsState = {
  posts: [],
  isLoading: false,
  errorMessage: '',
  post: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setLoading: (
      state,
      { payload = true }: PayloadAction<boolean | undefined>
    ) => {
      state.isLoading = payload;
    },
    getAllPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.errorMessage = '';
    },
    getSinglePost: (state, action: PayloadAction<IPost>) => {
      state.post = action.payload;
      state.isLoading = false;
      state.errorMessage = '';
    },
    addPost: (state, action: PayloadAction<IPost>) => {
      state.posts = [...state.posts, action.payload];
      state.isLoading = false;
      state.errorMessage = '';
    },
    editPost: (state, action: PayloadAction<IPost>) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      state.isLoading = false;
      state.errorMessage = '';
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.isLoading = false;
      state.errorMessage = '';
    },
    setError: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.errorMessage = action.payload?.message;
    },
  },
});

// Action creators are generated for each case reducer function
const {
  addPost,
  editPost,
  deletePost,
  getAllPosts,
  setLoading,
  setError,
  getSinglePost,
} = postsSlice.actions;

// -------------------------------------------------------------------------
// --------------------------- Actions -------------------------------------
// -------------------------------------------------------------------------

export const getPosts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get('http://localhost:3003/posts');
    dispatch(getAllPosts(data));
  } catch (error: any) {
    dispatch(setError(error));
  }
};

export const getSinglePostAction =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading());
      const { data } = await axios.get(`http://localhost:3003/posts/${id}`);
      dispatch(getSinglePost(data));
    } catch (error: any) {
      dispatch(setError(error));
    }
  };

export const addPostAction = (body: IPost) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.post(`http://localhost:3003/posts`, body);
    dispatch(addPost(data));
  } catch (error: any) {
    dispatch(setError(error));
  }
};

export const deletePostAction =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading());
      await axios.delete(`http://localhost:3003/posts/${id}`);
      dispatch(deletePost(id));
    } catch (error: any) {
      dispatch(setError(error));
    }
  };

export const editPostAction =
  (body: IPost) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading());
      const { data } = await axios.put(
        `http://localhost:3003/posts/${body.id}`,
        body
      );
      dispatch(editPost(data));
    } catch (error: any) {
      dispatch(setError(error));
    }
  };

export default postsSlice.reducer;

// dispatch(action(id))
// child(parent(id))

// const parent = (id) => (child) => {}
// const action = (id) => (dispatch) => {}
