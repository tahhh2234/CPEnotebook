import "./CommentSection.css";
import CommentDisplay from "./CommentDisplay.js";
import CommentBar from "./CommentBar.js";

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
      <h1>Disccussions</h1>
      <CommentDisplay
        comments={comments}
        handleReply={handleReply}
        handleDeleteComment={handleDeleteComment}
        replyIndex={replyIndex}
        replyText={replyText}
        handleReplyChange={handleReplyChange}
        handleKeyPress={handleKeyPress}
        handleAddReply={handleAddReply}
      />
      <CommentBar
        newComment={newComment}
        handleInputChange={handleInputChange}
        handleKeyPress={handleKeyPress}
        handleAddComment={handleAddComment}
      />
    </div>
  );
}

export default CommentSection;
