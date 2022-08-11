import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from '../../../api/config/axios_config';
import {Link} from 'react-router-dom';


const CarsByType = () => {

    const params = useParams();

    let [cars, setCars] = useState()
    const  data = async () => {
        let temp = await axios.get(
            `/api/cars/${params.id}/filter/?format=json`
        )
        let code = temp.status
        if (code === 200) {
            setCars(temp);
        }
    }
    useEffect(() => data, []);

  return (
    <main>
          <div className="container py-4 mb-3">
            <div className="row">
                <div className="col-lg-8 col-md-7 col-12">
                
                    {   
                        cars?.data?.length !== 0 
                        ? cars?.data?.map((item, idx) => {
                            return (
                                <div className="item_car mb-3 row mx-0" key={item.id}>
                                    <div className="col-md-3 p-0">
                                        <Link to={"/cars/" + item.id}>
                                            <img 
                                                src={item.images[0].image}
                                                alt={item.title} 
                                                className="w-100"
                                            />
                                        </Link>
                                        
                                    </div>
                                    <div className="col-md-6 p-3">
                                        <h4><Link to={"/cars/" + item.id}>{item.title}</Link></h4>
                                        <div className="mb-1">Тип топлтва: {item.fuel_type}</div>
                                        <div className="mb-1">Коробка передач: {item.gearbox}</div>
                                        <div className="mb-1">Пробег ( км ): {item.mileage}</div>
                                    </div>
                                    <div className="col-md-3 p-4">
                                        <h4 className="text-success text-end">$ {parseInt(item.price)}</h4>
                                        <div className="text-end">view: {item.views}</div>
                                    </div>
                                </div>
                            );
                        })
                        : (
                            <h4>Машин не найдено</h4>
                        )
                    }
                
                </div>
                <div className="col-lg-4 col-md-5 col-12">
                    <h4 className="text-center">Ads</h4>
                </div>
            </div>
        </div>
    </main>
  )
}

export default CarsByType
