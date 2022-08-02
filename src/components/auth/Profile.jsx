import React, {useState, useEffect} from 'react'
import {Card, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { isAuth, token, login, logout, get_user } = useAuth();
    const [user, setUser] = useState();

    const data = async() => {
        isAuth ? setUser(await get_user()) : setUser(null);
    }

    useEffect(() => data, []);

    return (
        <main>
            <Container>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-8">
                            <img src={user?.avatar} className="avatar-md mr-2" alt={user?.name} />
                            <b>{user?.username}</b>
                        </div>
                        <div className="col-4 text-end">
                            <a href="">Изменить пароль</a>
                        </div>
                    </div>
                    
                </div>
                <div className="card-body">
                    <h5 className="card-title">{user?.name}</h5>
                    <p className="card-text">{user?.information}</p>
                    <p><b>Почта:</b> {user?.email}</p>
                    <p><b>Номер мобильного телефона:</b> {user?.phone_number}</p>
                </div>
            </div>
            </Container>
        </main>
    )
}

export default Profile

