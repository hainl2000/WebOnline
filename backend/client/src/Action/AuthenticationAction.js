import axios from 'axios';
import { commonConstances as ACTIONS } from './ActionConstance';

export function Login(params)
{
    return (dispatch) => {
        dispatch({ type: ACTIONS.LOGIN_BEGIN, value: params })
        return axios.post('http://localhost:8000/login', {
                email: params.username,
                password: params.password
        }).then(response => {
            if(response.data.message === ACTIONS.AUTHENTICATION_FAILED)
            {
                dispatch({ type: ACTIONS.LOGIN_SUCCESS, value: false })
            }else{
                dispatch({ type: ACTIONS.LOGIN_SUCCESS, value: true })
            }
        })
    }
}

export function Signin(params)
{
    return (dispatch) => {
        dispatch({ type: ACTIONS.SIGN_UP_BEGIN, value: params })
        return axios.post('http://localhost:8000/signup', {
                email: params.email,
                username: params.username,
                password: params.password
        }).then(response => {
            if(response.data.message === ACTIONS.SIGN_UP_SUCCESS)
            {
                dispatch({ type: ACTIONS.LOGIN_SUCCESS, value: true })
            }else{
                dispatch({ type: ACTIONS.LOGIN_SUCCESS, value: false })
            }
        })
    }
}

export function Logout()
{
    return {
        type: ACTIONS.LOG_OUT
    }
}