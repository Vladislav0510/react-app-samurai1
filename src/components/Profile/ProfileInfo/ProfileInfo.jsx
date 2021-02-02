import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.contentImg}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowuG29PTm7HXwPzNuFsYQRdI2fDB_vNFXOw&usqp=CAU'/>
            </div>
            <div className={s.contentItems}>
                ava+dicription

            </div>
        </div>
    )
}
export default ProfileInfo