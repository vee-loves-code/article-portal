import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ title, body, author }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-body">{body}</p>
      <p className="card-author">Author: {author}</p>
    </div>
  );
};

export default ArticleCard;
