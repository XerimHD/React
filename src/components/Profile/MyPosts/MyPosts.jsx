import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";





const  MyPosts = (props) => {


    let newPostE = React.createRef();
    let addPost = () => {
        props.addPost();
        

    

    }

    let onPostChange = () => {
        let text = newPostE.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.content}>
            <div>
                <h3>My post</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostE} 
                        value={props.newPostText}/>
                </div>
                <div className={s.button}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                {props.post.map(p => <Post mes={p.mes} like={p.likeC} />)}

            </div>

        </div>

    )
}

export default MyPosts;