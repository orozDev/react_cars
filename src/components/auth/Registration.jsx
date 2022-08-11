import React, { useState } from "react"
import { InputGroup, Form, Container } from "react-bootstrap"
import "react-image-crop/dist/ReactCrop.css"
import useAuth from "../../hooks/useAuth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faKey, faPhone } from "@fortawesome/free-solid-svg-icons"
import NotFoundPage from "../main/errors/NotFoundPage"
import "bootstrap/dist/css/bootstrap.css"

const Registration = () => {

    const userHook = useAuth();

    const [avatar, setAvatar] = useState(null)
    const [avatarMessage, setAvatarMessage] = useState(null)
    const [name, setName] = useState('')
    const [nameMessage, setNameMessage] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberMessage, setPhoneNumberMessage] = useState(null)
    const [email, setEmail] = useState('')
    const [emailMessage, setEmailMessage] = useState(null)
    const [information, setInformation] = useState('')
    const [informationMessage, setInformationMessage] = useState(null)
    const [username, setUsername] = useState('')
    const [usernameMessage, setUsernameMessage] = useState(null)
    const [password1, setPassword1] = useState('')
    const [password1Message, setPassword1Message] = useState(null)
    const [password2, setPassword2] = useState('')
    const [password2Message, setPassword2Message] = useState(null)


    const register = async (e) => {
      e.preventDefault()
      if(password1 === password2) {

        setAvatarMessage(null)
        setNameMessage(null)
        setEmailMessage(null)
        setPhoneNumberMessage(null)
        setInformationMessage(null)
        setUsernameMessage(null)
        setPassword1Message(null)

        setPassword2Message(null)
        let data = {
          avatar: avatar,
          name: name,
          email: email,
          phone_number: phoneNumber,
          information: information,
          username: username,
          password: password1,
        }
      
        let response = await userHook.registration(data)
        if(response.isAuth) window.location.href = '/';
        else {
            let temp = response.message
            if(temp.avatar !== undefined) setAvatarMessage(temp.avatar[0])
            if(temp.name !== undefined) setNameMessage(temp.name[0])
            if(temp.email !== undefined) setEmailMessage(temp.email[0])
            if(temp.phone_umber !== undefined) setPhoneNumberMessage(temp.phone_umber[0])
            if(temp.information !== undefined) setInformationMessage(temp.information[0])
            if(temp.username !== undefined) setUsernameMessage(temp.username[0])
            if(temp.password !== undefined) setPassword1Message(temp.password[0])
        }
        
      } else{
        setPassword2Message('Пароли не совпадают!')
      }
    } 

  return (
    <>{ !userHook.isAuth 
      ? <main>
          <Container>
            <h2 className="text-center mb-4">Регистрация</h2>
            <form className="mb-4" onSubmit={e => register(e)}>
              <div className="row">
                <div className="mb-3 col-12">
                  <h6>
                    Аватарка <span className="text-danger">*</span>
                  </h6>
                  <input
                    className="form-control"
                    type="file"
                    src={avatar}
                    onChange={(e) => setAvatar(e.target.files[0])}
                    id="formFile"
                    required
                  />
                </div>
                {avatarMessage !== null 
                  ? <div className="mb-3 col-12">
                      <div className="alert alert-danger py-1">{avatarMessage}</div>
                    </div>
                  : <></> }
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                </div>
                {nameMessage !== null 
                  ? <div className="mb-3 col-12">
                      <div className="alert alert-danger py-1">{nameMessage}</div>
                    </div>
                  : <></> }
                <div className="col-md-6 col-12">
                  <h6>
                    Номер телефона <span className="text-danger">*</span>
                  </h6>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <FontAwesomeIcon icon={faPhone} />
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      placeholder="+996776780472..."
                      aria-label="Номер телефона"
                      aria-describedby="basic-addon1"
                      required
                      value={phoneNumber}
                      onChange={e => setPhoneNumber(e.target.value)}
                    />
                  </InputGroup>
                  {phoneNumberMessage !== null 
                  ? <div className="mb-3">
                      <div className="alert alert-danger py-1">{phoneNumberMessage}</div>
                    </div>
                  : <></> }
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                  {emailMessage !== null 
                  ? <div className="mb-3">
                      <div className="alert alert-danger py-1">{emailMessage}</div>
                    </div>
                  : <></> }
                </div>

                <div className="mb-3">
                  <h6>
                    Напишите о себе
                  </h6>
                  <textarea
                    name=""
                    className="form-control"
                    id=""
                    rows="5"
                    value={information}
                    onChange={(e) => setInformation(e.target.value)}
                    placeholder="
                            Расскажите о своих качествах, знаниях, увлечениях, которые, как 
                            вам кажется, будут полезны работодателю"
                  ></textarea>
                </div>
                {informationMessage !== null 
                  ? <div className="mb-3 col-12">
                      <div className="alert alert-danger py-1">{informationMessage}</div>
                    </div>
                  : <></> }
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </InputGroup>
                {usernameMessage !== null 
                  ? <div className="mb-3">
                      <div className="alert alert-danger py-1">{usernameMessage}</div>
                    </div>
                  : <></> }
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
                      value={password1}
                      onChange={(e) => setPassword1(e.target.value)}
                    />
                  </InputGroup>
                  {password1Message !== null 
                  ? <div className="mb-3">
                      <div className="alert alert-danger py-1">{password1Message}</div>
                    </div>
                  : <></> }
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
                      value={password2}
                      onChange={(e) => setPassword2(e.target.value)}
                    />
                  </InputGroup>
                  {password2Message !== null 
                  ? <div className="mb-3">
                      <div className="alert alert-danger py-1">{password2Message}</div>
                    </div>
                  : <></> }
                </div>
              </div>
              <div className="col-12"><input type="submit" className="btn btn-success w-100" value="Зарегистрироваться" /></div>
            </form>
          </Container>
        </main>
        : < NotFoundPage/>}
    </>
  )
}

export default Registration;
