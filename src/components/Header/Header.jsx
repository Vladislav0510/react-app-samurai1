import s from './Header.module.css'
const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerImage}>

            </div>
            <div className={s.headerName}>
                <span>SkyBlue</span>
            </div>
        </div>
    )
}
export default Header