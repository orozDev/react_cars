import React, {useState, useEffect} from 'react';
import {Navbar, Container, Form, Button, Nav, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from '../../api/config/axios_config';
import useAuth from '../../hooks/useAuth';
import AuthLogin from '../auth/AuthLogin';


const Navs = () => {
    const { isAuth, token, login, logout, get_user } = useAuth();
    const [modalShow, setModalShow] = React.useState(false);
    const [typesOfCars, setTypesOfCars] = useState([]);
    const [user, setUser] = useState();
   
    const data = async() => {
        let temp = await axios.get(
            '/api/type_of_cars/',
        );
        temp = temp.data.results;
        setTypesOfCars(temp);
        isAuth ? setUser(await get_user()) : setUser(null);
    }

    useEffect(() => data, []);
  return (
    <>
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Cars.kg</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                >
                    {typesOfCars.map((item, idx) => {
                         return <Nav.Link href={"/types_of_cars/" + item.id} key={item.id}>{item.title}</Nav.Link>
                    })}
                    <Nav.Link href="/about">О сайте</Nav.Link>
                    {isAuth 
                        ? <Nav.Link href="/profile">{user?.username}</Nav.Link>
                        : <Nav.Link onClick={() => setModalShow(true)}>Войти</Nav.Link>}
                    {isAuth 
                        ? <Nav.Link onClick={e => {logout(); window.location.reload();}}>Выйти</Nav.Link> 
                        : <Nav.Link href="/registration">Зарегистрироваться</Nav.Link>}
                    
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Nissan gtr r-34..."
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-light">Поиск</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <AuthLogin show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}

export default Navs