import React from "react";
import "./CommentBar.css";

const CommentBar = ({
  newComment,
  handleInputChange,
  handleKeyPress,
  handleAddComment,
}) => {
  return (
    <div className="comment-bar">
      <input
        type="text"
        value={newComment}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type your comment here..."
      />
      <button onClick={handleAddComment}>Post Comment</button>
    </div>
  );
};

export default CommentBar;
