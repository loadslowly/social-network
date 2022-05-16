import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    debugger;
    let posts = props.postData.map(item => <Post img={item.img} message={item.message} likesCount={item.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST', ava: 'https://i.pinimg.com/564x/e5/a9/2b/e5a92b2a017bcaafbf8431a054608db1.jpg'});
    }

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'EDIT-POST', text: text});
    }

    return (
        <div>
            <h3>My posts</h3>
            <div className={style.form}>
                <textarea onChange={onChangePost} value={props.newPostText}  ref={newPostElement} type={'text'} placeholder={'Your news...'} />
                <div className={style.confirm_block}>
                    <button onClick={addPost} type={'submit'}>Send</button>
                </div>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;