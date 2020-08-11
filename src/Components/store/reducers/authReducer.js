const initState = {
    authError: null //if null no error
}

const authReducer = (state = initState, action) => {
    //inside here we manipulate state
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login err', action.err)
            return {
                ...state,
                authError: `${action.err}`
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('SIGNOUT success')
            return state
        case 'SIGNUP_SUCCESS': 
            console.log('signup success')
            return {
                ...state,
                authError: null 
            }
        case 'SIGNUP_ERROR': 
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }
            
        default:
            return state
    }

}

export default authReducer;