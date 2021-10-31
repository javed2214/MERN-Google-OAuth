import { GET_CURRENT_USER } from '../constants'

const initialState = {
    isAuthenticated: false,
    user: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.payload,
                user: action.payload
            }
        
        default:
            return state
    }
}