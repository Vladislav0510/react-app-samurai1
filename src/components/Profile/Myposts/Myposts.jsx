import s from './Myposts.module.css'
import Post from "./Post/Post";

const Myposts = (props) => {


    let posts = props.postArray.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    return (
        <div className={s.posts}>
            <div className={s.myPosts}>
                <h3>Myposts</h3>
            </div>
            <div className={s.contentTextarea}>
                <textarea></textarea>

            </div>
            <div className={s.buttons}>
                <button>Submit</button>
                <button>Clean</button>
            </div>
            {posts}

        </div>
    )
}
export default Myposts