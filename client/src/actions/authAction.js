import axios from 'axios'
import { GET_CURRENT_USER } from '../constants'

export const getCurrentUser = () => {
    return (dispatch) => {
        axios.get('/auth/api/current_user')
            .then((resp) => {
                console.log(resp.data)
                dispatch({
                    type: GET_CURRENT_USER,
                    payload: resp.data
                })
            })
            .catch((err) => {
                console.log('Error in getting current User!')
            })
    }
}