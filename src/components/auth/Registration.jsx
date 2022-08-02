import React, { useState } from "react";
import { InputGroup, Form, Container } from "react-bootstrap";
import "react-image-crop/dist/ReactCrop.css";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faPhone } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";

const Registration = () => {

    const [avatar, setAvatar] = useState();
    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [information, setInformation] = useState();
    const [username, setUsername] = useState();
    const [password1, setPassword1] = useState();
    const [password2, setPassword2] = useState();

  return (
    <main>
      <Container>
        <h2 className="text-center mb-4">Регистрация</h2>
        <form className="mb-4">
          <div className="row">
            <div className="mb-3 col-12">
              <h6>
                Аватарка <span className="text-danger">*</span>
              </h6>
              <input
                className="form-control"
                type="file"
                onChange={(e) => {setAvatar(e.target.value)}}
                id="formFile"
                required
              />
            </div>
            <div className="col-12">
              <h6>
                Фамилия и имя <span className="text-danger">*</span>
              </h6>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Женишбек уулу Орозбек..."
                  aria-label="Фамилия и имя"
                  aria-describedby="basic-addon1"
                  required
                  value=""
                  onChange={(e) => {setName(e.target.value)}}
                />
              </InputGroup>
            </div>
            <div className="col-md-6 col-12">
              <h6>
                Номер телефона <span className="text-danger">*</span>
              </h6>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <FontAwesomeIcon icon={faPhone} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="+996776780472..."
                  aria-label="Номер телефона"
                  aria-describedby="basic-addon1"
                  required
                  value=""
                />
              </InputGroup>
            </div>

            <div className="col-md-6 col-12">
              <h6>
                Почта <span className="text-danger">*</span>
              </h6>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="example@exmple.kg..."
                  aria-label="Почта"
                  aria-describedby="basic-addon1"
                  required
                  value=""
                  onChange={(e) => {setEmail(e.target.value)}}
                />
              </InputGroup>
            </div>

            <div className="mb-3">
              <h6>
                Напишите о себе
              </h6>
              <textarea
                name=""
                class="form-control"
                id=""
                rows="5"
                onChange={(e) => {setInformation(e.target.text)}}
                placeholder="
                        Расскажите о своих качествах, знаниях, увлечениях, которые, как 
                        вам кажется, будут полезны работодателю"
              ></textarea>
            </div>
            <div className="col-12">
              <h6>
                Придумайте логин <span className="text-danger">*</span>
              </h6>
            </div>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faUser} />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="oroz..."
                aria-label="Придумайте логин"
                aria-describedby="basic-addon1"
                required
                value=""
                onChange={(e) => {setUsername(e.target.value)}}
              />
            </InputGroup>
            <div className="col-md-6 col-12">
              <h6>
                Придумайте пароль <span className="text-danger">*</span>
              </h6>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <FontAwesomeIcon icon={faKey} />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Придумайте пароль"
                  aria-label="Придумайте пароль"
                  aria-describedby="basic-addon1"
                  required
                  value=""
                  onChange={(e) => {setPassword1(e.target.value)}}
                />
              </InputGroup>
            </div>

            <div className="col-md-6 col-12">
              <h6>
                Подтвердите пароль <span className="text-danger">*</span>
              </h6>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <FontAwesomeIcon icon={faKey} />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Подтвердите пароль"
                  aria-label="Подтвердите пароль"
                  aria-describedby="basic-addon1"
                  required
                  value=""
                  onChange={(e) => {setPassword2(e.target.value)}}
                />
              </InputGroup>
            </div>
          </div>
          <div className="col-12"><input type="submit" className="btn btn-success w-100" value="Зарегистрироваться" /></div>
        </form>
      </Container>
    </main>
  );
};

export default Registration;
