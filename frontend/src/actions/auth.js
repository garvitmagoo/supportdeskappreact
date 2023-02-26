import axios from 'axios'
const API_URL = '/api/users/'

export const login =  (userData) => {
    return (dispatch) => {
     axios.post(API_URL + 'login', userData).then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data))
        dispatch({type:'LOGIN', payload: response.data})
    })    
}
}

export const register =  (userData) => {
    return (dispatch) => {
     axios.post(API_URL, userData).then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data))
        dispatch({type:'REGISTER', payload: response.data})
    })    
}
}

// export const register = (user) => {
//     return {
//         type: 'REGISTER',
//         user    
//     }
// }

export const reset = () => {
    return {
        type: 'RESET',
    }
} 

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
} 