const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [{
                id: 1,
                message: 'Hi!',
                likesCount: 12
            },
            {
                id: 2,
                message: 'How is your name?',
                likesCount: 10
            },
            {
                id: 3,
                message: 'Hi!',
                likesCount: 8
            },
            {
                id: 4,
                message: 'How are you?',
                likesCount: 11
            },
            {
                id: 5,
                message: 'How is your name?',
                likesCount: 9
            },
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages: [{
                id: 1,
                message: 'Hi!'
            },
            {
                id: 2,
                message: 'How is your name?'
            },
            {
                id: 3,
                message: 'Hi!'
            },
            {
                id: 4,
                message: 'How are you?'
            },
            {
                id: 5,
                message: 'How is your name?'
            },
            ],
            dialogs: [{
                id: 1,
                name: 'Andrii'
            },
            {
                id: 2,
                name: 'Roman'
            },
            {
                id: 3,
                name: 'Rostislav'
            },
            {
                id: 4,
                name: 'Pavlo'
            },
            {
                id: 5,
                name: 'Taras'
            },
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() { },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        console.log(action);
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 9
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;

            console.log(this._state.dialogsPage.newMessageBody);
            this._callSubscriber(this._state);                                         
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 9, message: body});
            this._callSubscriber(this._state);
        }

    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});

export default store;
window.store = store;