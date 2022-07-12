import React from 'react';
import Post from './Post/Post';
import mp from './MyPosts.module.css';
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormControls/FormControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";


const MyPosts = React.memo((props) => {
    let postElement = props.posts.map(post => <Post
        key={post.id}
        value={post.id}
        message={post.message}
        likesCount={post.likesCount}
    />);

    let addNewPost = (values) => {
        props.addPost(values.newPostBody);
    }

    return (
        <div className={mp.postsBlocks}>
            My posts
            <AddMessageFormRedux onSubmit={addNewPost} />
            <div className={mp.item}>
                {postElement}
            </div>
        </div>
    )
});

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newPostBody'}
                    component={Textarea}
                    placeholder="Enter your post"
                    validate={[required, maxLengthCreator(10)]}
                ></Field>
            </div>
            <button>Add post</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'profileAddPostForm' })(AddNewPostForm)

export default MyPosts;
