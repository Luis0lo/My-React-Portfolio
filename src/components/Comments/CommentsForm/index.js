import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

const CommentsForm = ({ API_URL, comments, setComments }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    async function postComment() {
      const response = await fetch(`${API_URL}/comments`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(data),
      });
      const { payload } = await response.json();
      setComments([...comments, ...payload]);
      console.log(comments);
    }
    postComment();
    reset();
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

export default CommentsForm;
