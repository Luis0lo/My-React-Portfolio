import React, { useState, useEffect } from 'react';

import './index.css';

const CommentsList = ({ comments, setComments, API_URL }) => {
  function editComment() {}

  function deleteComment(id) {
    async function deleteCommentById(id) {
      const res = await fetch(`${API_URL}/comments/${id}`, {
        method: 'DELETE',
      });
      //NEED TO CHANGE THE LOGIC BELLOW TO AVOID FILTER
      //USING THE INDEX TO SLICE MAYBE
      setComments(
        comments.filter((comment) => {
          return comment.id !== id;
        })
      );
    }

    deleteCommentById(id);
  }

  return (
    <div>
      {comments.map((comment, i) => {
        return (
          <div key={comment.id}>
            <div className="list_comment_container">
              <p>{comment.comment}</p>
              <p>
                By{' '}
                <em>
                  {comment.first_name} {comment.last_name}
                </em>{' '}
                who work as <em>{comment.job_title}</em>
              </p>
            </div>
            <div>
              <button
                key={comment.id}
                onClick={() => {
                  editComment(comment.id);
                }}
              >
                EDIT
              </button>
            </div>
            <div>
              <button
                key={comment.id}
                onClick={() => {
                  deleteComment(comment.id);
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
