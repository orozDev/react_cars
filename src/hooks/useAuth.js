import axios from '../api/config/axios_config';
import { useState } from 'react';


const useAuth = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))

    async function login(username, password) {
        const response = await axios.post(
            '/api/login/',
            {
                username: username,
                password: password,
            }
        ).catch(function (error) {
            console.log(error);
            if(error.response.status !== 400) alert('Ошибка в сервере!')
            return false;
        });
        if(response.status === 200){
            const token = response.data.token
            localStorage.setItem('token', token);
            setToken(token);
            return { isAuth: true, token: token };
        }

        return false;
    }

    function logout() {
        localStorage.removeItem('token');
        setToken(null);
    }

    async function get_user(){
        if(token !== null) {
            const response = await axios.get('/api/auth/', {
                headers: {
                    'Authorization': `Token ${token}`
                },
            });
            return response.data;
        }
    }
 
    return { isAuth: token !== null, token: token, login, logout, get_user }
}

export default useAuth