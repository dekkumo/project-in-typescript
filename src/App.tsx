import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodosPage from './components/pages/todoPage/TodosPage';
import { PostsPage } from './components/pages/postPage/PostsPage';
import { Header } from './components/header/Header';
import { PostDetails } from './components/pages/postPage/PostDetails';
import { Error } from './components/pages/error/Error';

const App: React.FC = () => {

  return (
    <div>
      <div className='header'></div>
      <div className='App'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<TodosPage />} />
            <Route path='/posts' element={<PostsPage />} />
            <Route path='/posts/:id' element={<PostDetails />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
