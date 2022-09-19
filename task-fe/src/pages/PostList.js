import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPost, formToggled } from "../redux/reducers/post";
import { fetchPosts, deletePost } from "../redux/thunks/post";
import SideDrawer from "../components/SideDrawer";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Loader = () => <p>loading....</p>;

export const PostList = () => {
  const { posts, loader, selectedPost } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleEditing = (id) => {
    dispatch(formToggled({ flag: true }));
    dispatch(selectPost({ id: id }));
  };

  const handleDeleting = (id) => {
    dispatch(deletePost(id));
  };

  const renderedPosts = posts.map((post, index) => (
    <PostCard
      key={index}
      title={post.title}
      body={post.body}
      onSelect={() => handleEditing(post?.id)}
      onDelete={() => handleDeleting(post?.id)}
    />
  ));

  return (
    <section className="posts-list">
      {loader ? <Loader /> : renderedPosts}
      <SideDrawer>
        <PostForm edit={selectedPost?.id} />
      </SideDrawer>
    </section>
  );
};
