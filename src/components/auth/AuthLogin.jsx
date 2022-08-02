import React, {useState, useEffect} from 'react'
import {Button, Modal, Form, InputGroup} from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCircleExclamation, faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';

const AuthLogin = (props) => {

    const { isAuth, token, login, logout } = useAuth();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState(null);
    const authentification = async (e) => {
        e.preventDefault();
        let response = await login(username, password)
        if(response.isAuth) {
            setUsername(null);
            setPassword(null);
            props.onHide();
            window.location.reload();
        } else {
            setMessage('Не верный пароль или не существует пользователя!');
        }  
    };


  return (
    <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Авторизация
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form  id="auth_form" onSubmit={(e) => authentification(e)}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Имя пользователя"
                        aria-label="Имя пользователя"
                        aria-describedby="basic-addon1"
                        required
                        value={username}
                        onChange={e => {setUsername(e.target.value)}}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                    <Form.Control
                        type="password"
                        placeholder="Пароль"
                        aria-label="Пароль"
                        aria-describedby="basic-addon1"
                        required
                        value={password}
                        onChange={e => {setPassword(e.target.value)}}
                    />
                </InputGroup>
                { message !== null 
                    ? (<div className="alert alert-danger"><FontAwesomeIcon icon={faCircleExclamation} /> {message}</div>)
                    : (<></>)
                }
            </form>
        </Modal.Body>
        <Modal.Footer>
            <input type="submit" form="auth_form" className="btn btn-success" value="Войти" />
            <Button onClick={props.onHide}>Закрыть</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default AuthLogin