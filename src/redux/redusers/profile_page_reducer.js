const SET_NEW_POST_VALUE = 'SET_NEW_POST_VALUE';
const SET_PROFILE_POST = 'SET_PROFILE_POST';

export const ActionProfilePageCreators = {
    updatePostValue(text){
        return {
            type: SET_NEW_POST_VALUE,
            value: text
        }
    },
    setProfilePost(){
        return {
            type: SET_PROFILE_POST,
        }
    }
}

const stateProfilePageReducer = (state,action) => {
    let newState = {...state}
    switch (action.type) {
        case SET_NEW_POST_VALUE:
            newState.NewPostValue = action.value
            return newState
        case SET_PROFILE_POST:
            let NewPost = {
                id: 1,
                message: newState.NewPostValue,
                countLikes: 0,
                img: "https://i.pinimg.com/736x/04/a8/73/04a87347b071ec062a586e02c23f6221.jpg",
            }
            newState.postsData.push(NewPost)
            newState.NewPostValue = ''
            return newState
        default:
            return state
    }
}

export default stateProfilePageReducer;
