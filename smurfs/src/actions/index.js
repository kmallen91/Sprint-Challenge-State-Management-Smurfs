import axios from 'axios'

export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'
export const ADD_SMURF = 'ADD_SMURF'
export const DELETE_SMURF = 'DELETE_SMURF'

export const fetchSmurfs = () => dispatch => {
    dispatch({type: START_FETCHING})
    axios   
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log (res.data)
            dispatch({ type: FETCH_SUCCESS, payload: res.data})
        })
        .catch (err => {
            dispatch({ type: FETCH_FAILURE, payload: err.response})
        })
}

export const addSmurf = (obj) => dispatch => {
    dispatch({ type: ADD_SMURF, payload: obj })
    axios 
        .post('http://localhost:3333/smurfs', obj)
        .then(res => console.log(res))
        .catch(err => console.log('YOU SMURFED UP', err))
}

export const deleteSmurf = () => {
    return {
        type: DELETE_SMURF
    }
}