export const initialState = {
    auth: {
        user_id: null,
        is_loggedin: false,
        token: localStorage.getItem("token") || "",
    }
}


const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "AUTH":
            localStorage.setItem("token", action.userData.token)
            return {
                auth: {
                    user_id:  action.userData.user._id,
                    is_loggedin: true,
                    token: action.userData.token
                }
            }
        default: return state
    }
}

export default reducer