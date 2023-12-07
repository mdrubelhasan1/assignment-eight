
import { useState } from 'react';
import './App.css';
import BlogContainer from './components/BlogContainer/BlogContainer';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddToBookMark =(Blog) =>{
    const newBookMarks = [...bookmarks, Blog];
    setBookMarks(newBookMarks);
  }

  const handleMarkRead =(id, time) =>{
    const newReadTime = readTime + time;
    setReadTime(newReadTime);

    const remainingBookMark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(remainingBookMark);
  }
  return (
    <div className="App">
      <Header></Header>
      <BlogContainer handleAddToBookMark={handleAddToBookMark} handleMarkRead={handleMarkRead}></BlogContainer>
    </div>
  );
}

export default App;
