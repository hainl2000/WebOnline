import axios, { Axios } from 'axios';
import { commonConstances as ACTIONS } from './ActionConstance';
import Cookies from 'js-cookie'

export function Login(params)
{
    return (dispatch) => {
        dispatch({ type: ACTIONS.LOGIN_BEGIN, value: params })
        return axios.post('http://localhost:8000/login', {
                email: params.username,
                password: params.password
        }, {withCredentials: true}).then(response => {
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
        }, {withCredentials: true}).then(response => {
            if(response.data.message === ACTIONS.SIGN_UP_SUCCESS)
            {
                dispatch({ type: ACTIONS.LOGIN_SUCCESS, value: true })
            }else{
                dispatch({ type: ACTIONS.LOGIN_SUCCESS, value: false })
            }
        })
    }
}

export function Authenticate()
{
    const cookie = Cookies.get('userId')
    if(cookie)
    {
        axios.get('http://localhost:8000/user/getData', { withCredentials: true }).then(response => {
            if(response)
            {
                console.log(response.data)
            }
        })
    }
    return {
        type: ACTIONS.SET_COOKIE,
        value: cookie
    }
}

export function Logout()
{
    return {
        type: ACTIONS.LOG_OUT
    }
}