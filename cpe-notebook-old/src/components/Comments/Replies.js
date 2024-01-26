import "./Replies.css";
import React from "react";

const Replies = ({
  replyIndex,
  index,
  replyText,
  handleReplyChange,
  handleKeyPress,
  handleAddReply,
  commentReplies,
  handleDeleteReply, // Include the function to handle reply deletion
}) => {
  const handleDelete = (replyIndex) => {
    handleDeleteReply(index, replyIndex);
  };

  return (
    <div className="replies">
      {commentReplies.map((reply, replyIndex) => (
        <div key={replyIndex} className="reply">
          <li>
            {reply}
            <button onClick={() => handleDelete(replyIndex)}>❌</button>
          </li>
        </div>
      ))}
      {replyIndex === index && (
        <div className="reply-form">
          <input
            type="text"
            value={replyText}
            onChange={handleReplyChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your reply here..."
          />
          <button onClick={handleAddReply}>Post Reply</button>
        </div>
      )}
    </div>
  );
};

export default Replies;
