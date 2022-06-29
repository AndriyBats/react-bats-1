const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your name?'},
        {id: 3, message: 'Hi!'},
        {id: 4, message: 'How are you?'},
        {id: 5, message: 'How is your name?'}
    ],
    dialogs: [
        {id: 1, name: 'Andrii'},
        {id: 2, name: 'Roman'},
        {id: 3, name: 'Rostislav'},
        {id: 4, name: 'Pavlo'},
        {id: 5, name: 'Taras'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 9, message: action.newMessageBody}]
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
