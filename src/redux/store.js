// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi!', likesCount: 12},
//                 {id: 2, message: 'How is your name?', likesCount: 10},
//                 {id: 3, message: 'Hi!', likesCount: 8},
//                 {id: 4, message: 'How are you?', likesCount: 11},
//                 {id: 5, message: 'How is your name?', likesCount: 9}
//             ],
//             newPostText: 'it-kamasutra.com'
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Hi!'},
//                 {id: 2, message: 'How is your name?'},
//                 {id: 3, message: 'Hi!'},
//                 {id: 4, message: 'How are you?'},
//                 {id: 5, message: 'How is your name?'}
//             ],
//             dialogs: [
//                 {id: 1, name: 'Andrii'},
//                 {id: 2, name: 'Roman'},
//                 {id: 3, name: 'Rostislav'},
//                 {id: 4, name: 'Pavlo'},
//                 {id: 5, name: 'Taras'}
//             ],
//             newMessageBody: ''
//         },
//         sidebarPage: {}
//     },
//     _callSubscriber() { },
//
//     getState() {return this._state;},
//     subscribe(observer) {this._callSubscriber = observer; },
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
//
//         this._callSubscriber(this._state);
//     }
// }
//
// export default store;
//
