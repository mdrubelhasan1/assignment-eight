import React from 'react';
import './Blog.css'

const Blog = ({blog, handleAddToBookMark, handleMarkRead}) => {
    const {id, coverImage, name, postDate, title, readTime} = blog;
    console.log(handleAddToBookMark);
    return (
        <div className='blog'>
            <img src={coverImage} alt="" />
           <div className='read-time'>
           <div className='blog-info'>
                <h4 className='name'>{name}</h4> 
                <h6 className='name'>{postDate}</h6>
                <h2 className='name'>{title}</h2>
                <button onClick={()=>handleMarkRead(id, readTime)} className='btn-marked'>marked as read</button>
            </div>
            <div className='bookmark-section'>
                <h6 className='time'><a href="/read">{readTime} min read</a></h6>
                <button onClick={()=>handleAddToBookMark(blog)} className='button-bookmark'>bookmarked</button>
            </div>
           </div>
            
        </div>
    );
};

export default Blog;