const ADD_POST = 'ADD-POst';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileRreducer = (state, action) => {
  switch(action.type) {
      case ADD_POST:
          let newPost = {
            id: 3,
            message: state.newPostText,
            likecount: 0
          };
          state.posts.push(newPost);
          state.newPostText = '';
          return state;
      case UPDATE_NEW_POST_TEXT:
          state.newPostText = action.newText;
          return state;
      default:
          return state; 
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text 
  }
}

export default profileRreducer;