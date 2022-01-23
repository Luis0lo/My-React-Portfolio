import React, { useState, useEffect } from 'react';
import CommentsList from '../CommentsList';

const CommentsViewer = ({ API_URL }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      const res = await fetch(`${API_URL}/comments`);
      const data = await res.json();
      setComments(data.payload);
    }
    getComments();
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      <p>Check out what {comments.length} people think about Luis</p>
      <CommentsList comments={comments} setComments={setComments} API_URL={API_URL}/>
    </div>
  );
};

export default CommentsViewer;
