const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsRreducer = (state, action) => {

  // if(action.type === SEND_MESSAGE) {
  //   let body = state.newMessageBody;
  //   state.newMessageBody = '';
  //   state.messages.push( { id: 7, message: body });           
  // } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
  //   state.newMessageBody = action.body;
  // } else 

  // return state;


  switch(action.type){
      case SEND_MESSAGE:
          let body = state.newMessageBody;
          state.newMessageBody = '';
          state.messages.push( { id: 7, message: body });  
          return state;
      case UPDATE_NEW_MESSAGE_BODY:
          state.newMessageBody = action.body;
          return state;
      default:
          return state;  
  }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyActionCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body 
  }
}

export default dialogsRreducer;