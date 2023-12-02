import "./CommentSection.css";

import React, { useState, useEffect } from "react";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyIndex, setReplyIndex] = useState(null);
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const updatedComments = [...comments, { text: newComment, replies: [] }];
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setNewComment("");
    }
  };

  const handleReplyChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleReply = (index) => {
    setReplyIndex(index);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (replyIndex !== null) {
        handleAddReply();
      } else if (newComment.trim() !== "") {
        handleAddComment();
      }
    }
  };

  const handleAddReply = () => {
    if (replyText.trim() !== "") {
      const updatedComments = [...comments];
      updatedComments[replyIndex].replies.push(replyText);
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setReplyIndex(null);
      setReplyText("");
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  return (
    <div className="comment-section">
      <h1>Discussion</h1>
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
      <input
        type="text"
        value={newComment}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type your comment here and press Enter to post"
      />
      <button onClick={handleAddComment}>Post Comment</button>
    </div>
  );
}

export default CommentSection;
