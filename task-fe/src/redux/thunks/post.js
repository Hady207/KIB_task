import { ApiAxios } from "../../utils/apiUtils";
import {
  loadingToggled,
  getPosts,
  postAdded,
  formToggled,
  updatePost,
  removePost,
} from "../reducers/post";

// fetchPosts is the "thunk action creator"
export function fetchPosts() {
  // fetchPostThunk is the "thunk function"
  return async function fetchPostThunk(dispatch, getState) {
    dispatch(loadingToggled({ flag: true }));
    const response = await ApiAxios.get(`/posts`);

    dispatch(getPosts({ posts: response.data.data }));
  };
}

export function createPosts(postBody) {
  return async function createPost(dispatch, getState) {
    const response = await ApiAxios.post(`/posts`, postBody);
    dispatch(postAdded({ post: response.data.data }));
    dispatch(formToggled({ flag: false }));
  };
}

export function updatePosts(postId, body) {
  return async function updatePostThunk(dispatch, getState) {
    const response = await ApiAxios.patch(`/posts/${postId}`, body);
    dispatch(
      updatePost({
        post: response.data.data,
      })
    );
    dispatch(formToggled({ flag: false }));
  };
}

export function deletePost(postId) {
  return async function deletePost(dispatch, getState) {
    await ApiAxios.delete(`/posts/${postId}`);
    dispatch(removePost({ id: postId }));
  };
}
