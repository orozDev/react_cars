import React, {useState, useEffect, useRef} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Container, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {useParams} from 'react-router-dom';
import axios from '../../../api/config/axios_config';
import {convert_text_to_html} from '../../../utils/utils.js';
import NotFoundPage from '../errors/NotFoundPage.jsx';
import ErroroPage from '../errors/ErroroPage.jsx';


function ItemCar() {
    const params = useParams();
    let [cars, setCars] = useState();
    const description =  useRef();
    const data = async () => {
        let temp = await axios.get(
            `/api/cars/${params.id}/?format=json`
        )
        let code = temp.status
        if (code === 200) {
            setCars(temp);
        }
    };
    useEffect(() => data, []);
  
    
    return cars?.status === 200 
        ? ( 
            <main className="py-5">
                <Container>
                    <div className="row mx-0">
                        <div className="col-lg-9 col-sm-12">
                            <Carousel className="mb-4">
                                {cars?.data?.images.map((item, idx) => {
                                    return (
                                        <Carousel.Item key={item.id}>
                                            <div className="text-center bg-dark" style={{'maxHeight': '400px'}}>
                                                <img
                                                    className="h-100 w-auto"
                                                    src={item.image}
                                                    alt={cars.data.title}
                                                />
                                            </div>
                                        </Carousel.Item>
                                    );
                                })}
                            </Carousel>
                            <h1 className="text-center">{cars?.data?.title}</h1>
                            <h2 className="text-success">Стоимость: {cars?.data?.price}{ cars?.data?.currency === 'Доллар' ? "$": cars?.data?.currency}</h2>
                            <Table striped className="tmb-4">
                                <thead>
                                    <tr>
                                       <th colSpan="2" className="text-center">Характеристики</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Марка</th>
                                        <td>{cars?.data?.brand}</td>
                                    </tr>
                                    <tr>
                                        <th>Модель</th>
                                        <td>{cars?.data?.model}</td>
                                    </tr>
                                    <tr>
                                        <th>Вид машины</th>
                                            <td>{cars?.data?.type_of_car}</td>
                                    </tr>
                                    <tr>
                                        <th>Год выпуска</th>
                                        <td>{cars?.data?.year_of_issue}</td>
                                    </tr>
                                    <tr>
                                        <th>Пробег</th>
                                        <td>{cars?.data?.mileage}</td>
                                    </tr>
                                    <tr>
                                        <th>Объем</th>
                                            <td>{cars?.data?.volume}</td>
                                    </tr>
                                    <tr>
                                        <th>КПП</th>
                                        <td>{cars?.data?.gearbox}</td>
                                    </tr>
                                    <tr>
                                        <th>Привод</th>
                                        <td>{cars?.data?.type_of_drive}</td>
                                    </tr>
                                    <tr>
                                        <th>Тип топлива</th>
                                        <td>{cars?.data?.fuel_type}</td>
                                    </tr>
                                </tbody>
                             </Table>
                            <h2 className="text-center mb-3">Описание</h2>
                            <p className="mb-3" ref={description}></p>
                            <h2 className="text-center mb-3">Владелец</h2>
                            <div className="row  mx-0 align-items-center">
                                <div className="col-6">
                                    <h3>{cars?.data?.owner.phone_number}</h3>
                                </div>
                            <div className="col-6">
                                <div className="row mx-0 align-items-center">
                                    <div className="col-md-10 col-8 text-end">
                                        <div><h4 className="m-0">{cars?.data?.owner.name}</h4></div>
                                            <div>{cars?.data?.owner.username}</div>
                                        </div>
                                        <div className="col-md-2 col-4"> <img src={cars?.data?.owner.avatar}  style={{"width": "4rem"}} className="rounded-circle" alt="" /></div>     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
        )
        : cars?.status === 404 ? <NotFoundPage/>
        : <ErroroPage code={cars?.status} />   
}

export default ItemCar