import React from 'react';
import styles from './Contact.module.css';
import {addMessageAction, changeMessageTextAction} from "../../State/contactReducer";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.state;
        this.dispatch = this.props.dispatch;
    }

    render() {

        let newMessageElement = React.createRef();

        let addContact = (e) => {
            e.preventDefault();
    
            let text = newMessageElement.current.value;
    
            if(text) {
                this.dispatch(addMessageAction())
            }
            newMessageElement.current.value = '';
        }

        let changeMessageValue = () => {
            let newText = newMessageElement.current.value;
            this.dispatch(changeMessageTextAction(newText))
        }

        return(
            <div id='contact' className={styles.contact}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.lt_side} data-aos="fade-up-right">
                        <img src={this.state.image.src} alt={this.state.image.alt} />
                    </div>
                    <div className={styles.rt_side}>
                        <div className={styles.title}>
                            <h3>{this.state.title}</h3>
                        </div>
                        <div className={styles.text_block}>
                            {this.state.text}
                        </div>
                        <div className={styles.form}>
                            <input className={styles.input} placeholder={this.state.placeholder} value={this.state.value} ref={newMessageElement} onChange={changeMessageValue} />
                            <input className={styles.button} type='submit' value={this.state.button} onClick={ addContact } />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;