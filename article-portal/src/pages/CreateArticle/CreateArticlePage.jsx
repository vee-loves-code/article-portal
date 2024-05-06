import React, { useState, useEffect } from 'react';
import ArticleForm from '../../components/ArticleForm/ArticleForm';
import './CreateArticlePage.css';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateArticlePage = () => {
  const [userData, setUserData] = useState([]);
  const [randomUserId, setRandomUserId] = useState(null);

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
        // Generate a random userId
        const randomIndex = Math.floor(Math.random() * users.length);
        setRandomUserId(users[randomIndex].id);
      } catch (error) {
        console.error('Error fetching all users:', error);
      }
    };

    fetchAllUsers();
  }, []);

  const handleSubmission = async newPost => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          body: JSON.stringify({
            ...newPost,
            userId: randomUserId,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      const data = await response.json();
      console.log('New post created:', data);
      toast.success('Post created successfully');
    } catch (error) {
      console.error('Error creating new post:', error);
      toast.error('Failed to create post');
    }
  };

  return (
    <div className="post-container">
      <Link to="/">
        <div className="back-arrow">
          <FaArrowLeft />
        </div>
      </Link>
      <ArticleForm
        className="post-form-container"
        onSubmit={handleSubmission}
      />
      <ToastContainer />
    </div>
  );
};

export default CreateArticlePage;
