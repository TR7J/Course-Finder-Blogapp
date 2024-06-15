import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Comments({ postId, token}) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get(`http://localhost:4000/post/${postId}/comments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },{ withCredentials: true });
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }
    fetchComments();
  }, [postId, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4000/post/${postId}/comment`, {
        commentText,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },{ withCredentials: true });
      setCommentText('');
      setComments((prevComments) => [...prevComments, response.data]);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Submit</button>
      </form>
      {comments.map((comment) => (
        <div key={comment._id}>
          <div>{comment.creator && comment.creator.username}</div>
          <div>{comment.text}</div>
        </div>
      ))}
    </div>
  );
}