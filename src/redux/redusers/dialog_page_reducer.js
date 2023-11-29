const SET_MESSAGE_VALUE = 'SET_MESSAGE_VALUE';
const SET_USER_MESSAGE = 'SET_USER_MESSAGE';

export const ActionDialogPageCreators = {
    updateMessageBody(text){
        return {
            type: SET_MESSAGE_VALUE,
            value: text
        }
    },
    setUserMessage(){
        return {
            type : SET_USER_MESSAGE,
        };
    }
}

const stateDialogPageReducer = (state, action) => {
    let newState = {...state}
    switch (action.type) {

        case SET_MESSAGE_VALUE:
            newState.newMessageData = action.value
            return newState

        case SET_USER_MESSAGE:
            let NewMessage = {
                id: 1,
                userMessage: newState.newMessageData
            }
            newState.messageData.push(NewMessage);
            newState.newMessageData = ''
            return newState
        default:
            return state
    }
}

export default stateDialogPageReducer;
