import React, { useEffect } from 'react';
import CommentsList from '../CommentsList';

const CommentsViewer = ({
  API_URL,
  comments,
  setComments,
  update,
  setUpdate,
  setIdUpdate,
  setAddComment,
}) => {
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
      {!comments.length ? (
        <p>Be the first and leave me a comment</p>
      ) : (
        <p>Check out, I got {comments.length} {comments.length < 2 ? 'comment' : 'comments'} </p>
      )}

      <CommentsList
        comments={comments}
        setComments={setComments}
        update={update}
        setUpdate={setUpdate}
        setIdUpdate={setIdUpdate}
        setAddComment={setAddComment}
        API_URL={API_URL}
      />
    </div>
  );
};

export default CommentsViewer;
