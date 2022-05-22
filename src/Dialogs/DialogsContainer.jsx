import React from "react";
import style from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsAnswer from "./DialogsAnswer/DialogsAnswer";
import {addMessageActionCreator, onChangeMessageActionCreator} from "../Redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogsElements =  props.state.dialogsData.map((item,i) => <DialogsItem id={i + 1} name={item.name}/>);
    let messagesElements = props.state.messagesData.map(item => <DialogsAnswer text={item.messages} />);

    let addAnswer = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onChangeMessage = () => {
        let message = addAnswer.current.value;
        props.dispatch(onChangeMessageActionCreator(message));
    }

    return (
        <div className={style.dialogs}>

            <div className={style.dialogsBlock}>
                {dialogsElements}
            </div>
            <div>
                <div>
                    {messagesElements}
                </div>
                <div className={style.form}>
                    <textarea onChange={onChangeMessage} ref={addAnswer} value={props.state.newMessageText} type={'text'} placeholder={'Write a message...'}/>
                    <div className={style.confirm_block}>
                        <button onClick={addMessage} type={'submit'}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;