import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const signupAction = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signup(authData)
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
        navigate('/')
    } catch (error) {

        console.log(error)
    }
}

export const loginAction = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.login(authData)
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
        dispatch({ type: 'AUTH', data })
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}
