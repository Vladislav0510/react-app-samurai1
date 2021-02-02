import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.state.dialogArray.map(d => <Dialog id={d.id} name={d.name}/>)

    let messages = props.state.messageArray.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>

            <div className={s.dialog}>
                {dialogs}
            </div>

            <div className={s.messages}>
                {messages}
            </div>

        </div>
    )
}
export default Dialogs