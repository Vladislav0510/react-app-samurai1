import s from './Profile.module.css'
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Myposts postArray={props.state.postArray}/>
        </div>
    )
}

export default Profile