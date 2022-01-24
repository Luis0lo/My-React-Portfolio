import React, { useState } from 'react';
import CommentsForm from './CommentsForm';
import CommentsViewer from './CommentsViewer';
import './index.css'

const Comments = ({ API_URL }) => {
  const [comments, setComments] = useState([]);
  const [update, setUpdate] = useState(false);
  const [idUpdate, setIdUpdate] = useState('');
  const [addComment, setAddComment] = useState(false);

  return (
    <div className='comments_container'>
    <h2>Comments</h2>
      <button
        onClick={() => {
          setAddComment(!addComment);
        }}
      >
        ADD
      </button>
      {addComment ? (
        <CommentsForm
          API_URL={API_URL}
          comments={comments}
          setComments={setComments}
          update={update}
          setUpdate={setUpdate}
          idUpdate={idUpdate}
          setAddComment={setAddComment}
        />
      ) : (
        ''
      )}

      <CommentsViewer
        API_URL={API_URL}
        comments={comments}
        setComments={setComments}
        update={update}
        setUpdate={setUpdate}
        setIdUpdate={setIdUpdate}
        setAddComment={setAddComment}
      />
    </div>
  );
};

export default Comments;
