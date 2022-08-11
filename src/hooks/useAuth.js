import axios from '../api/config/axios_config';
import simple_axios from 'axios'
import { useState } from 'react';


const useAuth = () => {
    const temp_user = localStorage.getItem('user')
    const [user, setUser] = useState(temp_user === null ? null : JSON.parse(temp_user))

    async function login(username, password) {
        const response = await axios.post(
            '/api/auth/login/',
            {
                username: username,
                password: password,
            }
        ).catch(function (error) {
            console.log(error);
            if(error.response.status !== 400 && error.response.status !== 404) alert('Ошибка в сервере!')
            return false;
        });
        if(response.status === 200){
            const user = response.data
            localStorage.setItem('user',  JSON.stringify(user))
            setUser(user)
            return { isAuth: true, user: user }
        }

        return false;
    }

    function logout() {
        localStorage.removeItem('user');
        setUser(null);
    }

    async function registration (data) {
        let form = new FormData()
        form.append('avatar', data.avatar);
        form.append('name', data.name)
        form.append('email', data.email)
        form.append('phone_number', data.phone_number)
        form.append('information', data.information)
        form.append('username', data.username)
        form.append('password', data.password)
        let status = 201;
        let no_valid_forms = null;

        let response = await simple_axios({
            method: 'POST',
            url: '/api/auth/registration/',
            data: form,
        }).catch(error => {
            if (error.response.status !== 400){
                console.log(error);
            }
            console.log(error);
            status = error.response.status
            no_valid_forms = error.response.data
        })
       
        if(status === 201){
            const user = response.data
            localStorage.setItem('user',  JSON.stringify(user))
            setUser(user)
            return { isAuth: true, user: user }
        } else {
            return { isAuth: false, message: no_valid_forms }
        }
    }

    async function get_user(){
        if(user !== null) {
            const response = await axios.get('/api/auth/', {
                headers: {
                    'Authorization': `Token ${user.token}`
                },
            });
            return response.data;
        }
    }
 
    return { isAuth: user !== null, user: user, login, logout, registration, get_user }
}

export default useAuth