import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/CloseRounded";
import { Button, TextField } from "@mui/material";
import { formToggled, clearSelection } from "../redux/reducers/post";
import { createPosts, updatePosts } from "../redux/thunks/post";

const PostForm = ({ edit }) => {
  const { selectedPost } = useSelector((state) => state.post);
  const [title, setTitle] = useState(selectedPost?.title || "");
  const [body, setBody] = useState(selectedPost?.body || "");
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onBodyChanged = (e) => setBody(e.target.value);
  const handleClose = () => {
    dispatch(formToggled({ flag: false }));
    dispatch(clearSelection());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      dispatch(updatePosts(selectedPost?.id, { title, body }));
    } else {
      dispatch(createPosts({ title, body }));
    }
  };

  return (
    <div>
      <div className="form-header">
        <CloseIcon onClick={handleClose} />
        <h2 className="form-title">Add a New Post</h2>
      </div>
      <form className="form-container" onSubmit={handleFormSubmit}>
        <TextField
          id="outlined-basic"
          label="Post Title"
          name="postTitle"
          className="form-input"
          margin="dense"
          variant="outlined"
          value={title}
          onChange={onTitleChanged}
        />

        <TextField
          id="outlined-basic"
          label="Post Content"
          name="postContent"
          margin="dense"
          variant="outlined"
          value={body}
          onChange={onBodyChanged}
        />

        <div className="submit-button">
          <Button variant="contained" type="submit">
            {edit ? "Edit" : "Save Post"}
          </Button>
        </div>
        {/* <button type="submit">Save Post</button> */}
      </form>
    </div>
  );
};

export default PostForm;
