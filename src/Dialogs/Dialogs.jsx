import React from "react";
import style from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsAnswer from "./DialogsAnswer/DialogsAnswer";

const Dialogs = (props) => {


    let dialogsElements =  props.state.dialogsData.map((item,i) => <DialogsItem id={i + 1} name={item.name}/>);

    let messagesElements = props.state.messagesData.map(item => <DialogsAnswer text={item.messages} />);

    let addAnswer = React.createRef();

    let newAnswer = () => {
        let text = addAnswer.current.value;
        alert(text);
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
                    <textarea ref={addAnswer} type={'text'} placeholder={'Write a message...'}/>
                    <div className={style.confirm_block}>
                        <button onClick={newAnswer} type={'submit'}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;