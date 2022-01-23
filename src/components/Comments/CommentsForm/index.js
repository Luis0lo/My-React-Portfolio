import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

const Comments = ({API_URL}) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    async function postComment() {
      const response = await fetch(`${API_URL}/comments`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(data),
      });
      const newComment = await response.json();
      console.log('I like your comment:', newComment.payload[0].comment);
    }
    postComment();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input
          name="firstName"
          type="text"
          {...register('firstName', {
            required: 'Required',
          })}
        />
        <label>Last Name</label>

        <input
          name="lastName"
          type="text"
          {...register('lastName', {
            required: 'Required',
          })}
        />
        <label>Job Title</label>

        <input
          name="jobTitle"
          type="text"
          {...register('jobTitle', {
            required: 'Required',
          })}
        />
        <label>Comment</label>

        <textarea
          name="comment"
          type="text"
          {...register('comment', {
            required: 'Required',
          })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Comments;
