import './CarComponent.css';
import type {ICar} from "../../models/ICar.ts";
import type {FC} from "react";

type ICarComponent = {
    car: ICar;
}

export const CarComponent: FC<ICarComponent> = ({car}) => {
    return (
        <>
            <div className={'car-wrapper'}>
                {car.id} | {car.brand} {car.year}
                <p>price: {car.price}</p>
            </div>
        </>
    );
};