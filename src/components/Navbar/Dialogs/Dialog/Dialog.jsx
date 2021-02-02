import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import style from './Dialog.module.css'

const Dialog = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialogItem}>
            <span className={style.dialogImage}><img src='https://sun9-2.userapi.com/impf/c846520/v846520252/1301eb/bDZG06vteb4.jpg?size=720x960&quality=96&proxy=1&sign=40422fa1d2c32868cacb5677440f5add&type=album'/></span>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}
export default Dialog