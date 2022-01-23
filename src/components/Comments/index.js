import React, { useState } from 'react';
import CommentsForm from './CommentsForm'
import CommentsViewer from './CommentsViewer';

const Comments = ({API_URL}) => {
  const [comments, setComments] = useState([]);

  return (
    <div>
      <CommentsForm API_URL={API_URL} comments={comments} setComments={setComments}/>
      <CommentsViewer API_URL={API_URL} comments={comments} setComments={setComments}/>
    </div>
  );
};

export default Comments;
