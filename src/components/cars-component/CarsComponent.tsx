import "./CarsComponent.css";
import {useEffect, useState} from "react";
import type {ICar} from "../../models/ICar.ts";
import {CarComponent} from "../car-component/CarComponent.tsx";
import {getCars} from "../../services/api.service.ts";

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getCars().then(date => setCars(date));
    }, []);

    return (
        <div className={"cars-wrapper"}>
            {
                cars.map((car: ICar) => <CarComponent key={car.id} car={car} />)
            }
        </div>
    );
};