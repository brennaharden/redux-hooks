

const initialState = {
    user: {}
}

const LOGIN_USER = 'LOGIN_USER'
const GET_USER = 'GET_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export function loginUser(payload){
    return {
        type: LOGIN_USER,
        payload: payload
    }
}

export function getUser(payload){
        console.log(payload)
    return {
        type: GET_USER,
        payload: payload
    }
}
export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export default function reducer(state = initialState, action){
    const{type, payload} = action
    switch(type){
        case LOGIN_USER:
            console.log(payload)
            return {...state, user: payload}
        // case GET_USER + "_PENDING":
        //     return state
        case GET_USER:
            return {...state, user: payload}
        // case GET_USER + "_REJECTED":
        //     return initialState
        case LOGOUT_USER:
            return {...state, ...payload}
        default:
            return state
    }
}