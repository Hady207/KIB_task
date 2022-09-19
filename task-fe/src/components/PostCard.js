import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";

const PostCard = ({ title, body, onDelete, onSelect }) => {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ marginBottom: 15, backgroundColor: "#fefefe" }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>

      <CardActions>
        <Button onClick={onSelect} size="small">
          Edit
        </Button>
        <Button onClick={onDelete} size="small" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
