import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const {coverImage, name, postDate} = props.blog;
    console.log(name);
    return (
        <div className='blog'>
            <img src={coverImage} alt="" />
            <div className='blog-info'>
                <h4 className='name'>{name}</h4> 
                <h6 className='name'>{postDate}</h6>
            </div>
            
        </div>
    );
};

export default Blog;