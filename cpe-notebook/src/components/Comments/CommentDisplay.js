// CommentDisplay.js

import React from "react";
import "./CommentDisplay.css";
import Replies from "./Replies";

const CommentDisplay = ({
  comments,
  handleReply,
  handleDeleteComment,
  replyIndex,
  replyText,
  handleReplyChange,
  handleKeyPress,
  handleAddReply,
  handleDeleteReply, // Pass the function to handle reply deletion
}) => {
  return (
    <div className="comment-display">
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment.text}
            <button onClick={() => handleReply(index)}>Reply</button>
            <button onClick={() => handleDeleteComment(index)}>❌</button>
            <Replies
              replyIndex={replyIndex}
              index={index}
              replyText={replyText}
              handleReplyChange={handleReplyChange}
              handleKeyPress={handleKeyPress}
              handleAddReply={handleAddReply}
              handleDeleteReply={handleDeleteReply} // Pass the function to handle reply deletion
              commentReplies={comment.replies}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentDisplay;
