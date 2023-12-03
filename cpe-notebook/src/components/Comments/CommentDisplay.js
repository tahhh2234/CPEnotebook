import React from "react";
import "./CommentDisplay.css";

const CommentDisplay = ({
  comments,
  handleReply,
  handleDeleteComment,
  replyIndex,
  replyText,
  handleReplyChange,
  handleKeyPress,
  handleAddReply,
}) => {
  return (
    <div className="comment-display">
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment.text}
            <button onClick={() => handleReply(index)}>Reply</button>
            <button onClick={() => handleDeleteComment(index)}>❌</button>
            {replyIndex === index && (
              <div>
                <input
                  type="text"
                  value={replyText}
                  onChange={handleReplyChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your reply here and press Enter to post"
                />
                <button onClick={handleAddReply}>Post Reply</button>
              </div>
            )}
            {comment.replies && comment.replies.length > 0 && (
              <ul>
                {comment.replies.map((reply, replyIndex) => (
                  <li key={replyIndex}>{reply}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentDisplay;
