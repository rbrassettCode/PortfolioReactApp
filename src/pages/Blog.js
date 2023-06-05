import React from 'react';
import ReactMarkdown from 'react-markdown';
import blogData from '../data/BlogData';

function Blog() {
  return (
    <div>
      <h1>Blog Posts</h1>
      {blogData.map((post) => (
        <div key={post.id} className='blog-post'>
          <h2>{post.title}</h2>
          <p>Author: {post.author}</p>
          <p>Date: {post.date}</p>
          <div className='content'>
          <div className="content-inner">
            {parseContent(post.content)}
            </div>
          </div>
        </div>
      )).reverse()}
    </div>
  );
}

function parseContent(content) {
    return content.split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  }

export default Blog;