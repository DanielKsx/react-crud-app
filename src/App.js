import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import AddPostPage from './components/pages/AddPostPage';
import EditPostPage from './components/pages/EditPostPage';
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';
import PostPage from './components/pages/PostPage';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header';
import Footer from './components/views/Footer'


function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/post/add" element={<AddPostPage />} />
        <Route path="/post/edit/:id" element={<EditPostPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />  
    </Container>
  );
}

export default App;
