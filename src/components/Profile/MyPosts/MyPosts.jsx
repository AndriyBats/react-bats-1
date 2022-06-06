import React from 'react';
import Post from './Post/Post';
import mp from './MyPosts.module.css';
import { addPostActionCreator } from '../../../redux/state';
import { updateNewPostTextActionCreator } from '../../../redux/state';

const MyPosts = (props) => {
    let postElement = props.postData
        .map(post => <Post value={post.id} message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={mp.postsBlocks}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={mp.item}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;
