import React, { useState } from 'react';
import './ArticleForm.css';

const ArticleForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      title,
      body,
    };
    onSubmit(newPost); // Call the onSubmit function and pass the new post data
    setTitle(''); // Clear the title input field
    setBody(''); // Clear the body input field
  };

  return (
    <div className="post-containers">
      <form onSubmit={handleSubmit}>
        <h1>Create Article</h1>
        <div className="title-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Description</label>
          <textarea
            id="body"
            value={body}
            onChange={e => setBody(e.target.value)}
            required
          />
        </div>
        <div className="submit-button-container">
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
