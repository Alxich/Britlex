const ADD_MESSAGE = 'ADD-MESSAGE',
      UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const contactReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {contact: state.value};
            state.mails_log.push(newMessage);
            console.log('Hey new mails come out! ' + newMessage.contact);
            state.value = '';        
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.value = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageAction = () => ({type: ADD_MESSAGE});
export const changeMessageTextAction = (newText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: newText});

export default contactReducer;