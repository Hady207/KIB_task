import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loader: false,
    formFlag: false,
    selectedPost: null,
  },
  reducers: {
    getPosts(state, action) {
      state.posts = action.payload.posts;
      state.loader = false;
    },
    postAdded(state, action) {
      state.posts.push(action.payload.post);
    },
    updatePost(state, action) {
      const newArr = state.posts.filter(
        (post) => post.id !== action.payload.post.id
      );

      state.posts = [...newArr, action.payload.post];
    },
    postRemoveAll(state, action) {
      state.posts = [];
    },
    removePost(state, action) {
      const newArr = state.posts.filter(
        (post) => post.id !== action.payload.id
      );

      state.posts = newArr;
    },
    loadingToggled(state, action) {
      state.loader = action.payload.flag;
    },
    formToggled(state, action) {
      state.formFlag = action.payload.flag;
    },
    selectPost(state, action) {
      state.selectedPost = state.posts.find(
        (post) => post.id === action.payload.id
      );
    },
    clearSelection(state, action) {
      state.selectedPost = null;
    },
  },
});

export const {
  getPosts,
  addPost,
  postAdded,
  postRemoveAll,
  updatePost,
  removePost,
  loadingToggled,
  formToggled,
  selectPost,
  clearSelection,
} = postSlice.actions;

export default postSlice.reducer;
