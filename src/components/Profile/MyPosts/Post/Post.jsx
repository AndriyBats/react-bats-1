import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
  return (
    <div className={p.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU" alt="" />
      <span>
        post {props.value} {props.message}
      </span>
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;