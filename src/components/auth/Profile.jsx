import React from 'react'
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import useAuth from '../../hooks/useAuth';
import NotFoundPage from '../main/errors/NotFoundPage';

const Profile = () => {
    const { isAuth, user, login, logout, get_user } = useAuth();

    return (
        <>
            {isAuth ?
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
                                        <a href="/">Изменить пароль</a>
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
            : <NotFoundPage />}
        </>
    )
}

export default Profile

