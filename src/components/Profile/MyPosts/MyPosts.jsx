import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    return<div> 
      My posts

      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>

      <div className={s.posts}>
     <Post massage='Hi, how are you'/>
     <Post massage='It`s post'/>
    
  </div>
      
    </div>
}
export default MyPosts;