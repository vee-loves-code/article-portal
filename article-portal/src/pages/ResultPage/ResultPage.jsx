import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable';
import './ResultPage.css';
import ArticleCard from '../../components/ArticleCard/ArticleCard';

const ResultPage = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState('');
  const [userData, setUserData] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );
        const data = await response.json();
        console.log('Fetched all users:', data);
        const users = data.map(user => ({
          value: user.id,
          label: user.name,
          id: user.id,
        }));
        setUserData(users);
      } catch (error) {
        console.error('Error fetching all users:', error);
      }
    };

    fetchAllUsers();
  }, []);

  useEffect(() => {
    const results = userData.filter(user =>
      user.label.toLowerCase().includes(input.toLowerCase()),
    );
    setResults(results);
  }, [input, userData]);

  const handleSelect = async result => {
    setSelectedResult(result);
    console.log('Selected result:', result);
    if (result) {
      if (result.id) {
        // Fetch posts by userId
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${result.id}`)
          .then(response => response.json())
          .then(json => setPosts(json));
      } else {
        // Fetch posts by title
        fetch(`https://jsonplaceholder.typicode.com/posts?q=${result.label}`)
          .then(response => response.json())
          .then(json => setPosts(json));
      }
    }
  };

  return (
    <div className="result-page">
      <Link to="/">
        <div className="back-arrow">
          <FaArrowLeft />
        </div>
      </Link>
      <div className="search-bar-container">
        <h1>Search for articles Author or Title</h1>
      </div>
      <CreatableSelect
        placeholder="Search for articles Author or Title..."
        options={results}
        isClearable
        onChange={handleSelect}
        className="selectField"
      />
      <div className="post-container">
        {posts.map(post => {
          const authorName = userData.find(
            user => user.id === post.userId,
          )?.label;
          return (
            <ArticleCard
              key={post.id}
              title={post.title}
              body={post.body}
              author={authorName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResultPage;
