import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.postAva}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsulkGpPD7H-Hbhxsd2lHT40dxxpgjlLQopA&usqp=CAU'/>
                <span>{props.message}</span>
            </div>
            <div className={s.postLike}>

                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0E06huzJRZCu_VqHvr405ZoIw_fzi-sBPg&usqp=CAU'/>
                {props.likesCount}
            </div>
        </div>
    )
}
export default Post