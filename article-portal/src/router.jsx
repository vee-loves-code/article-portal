import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ResultPage from './pages/ResultPage/ResultPage';
import CreateArticlePage from './pages/CreateArticle/CreateArticlePage';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/result',
    element: <ResultPage />,
  },
  {
    path: '/create-article',
    element: <CreateArticlePage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
