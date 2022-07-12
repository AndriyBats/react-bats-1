import profileReducer, { addPostActionCreator } from "./profile-reducer";


test('length of posts should be incremented', () => {
    let action = addPostActionCreator("it");
    let state = {
        posts: [
            {id: 1, message: 'Hi!', likesCount: 12},
            {id: 2, message: 'How is your name?', likesCount: 10},
            {id: 3, message: 'Hi!', likesCount: 8},
            {id: 4, message: 'How are you?', likesCount: 11},
            {id: 5, message: 'How is your name?', likesCount: 9}
        ]
    }
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(6);
    expect(newState.posts[5].message).toBe("it");
  });

