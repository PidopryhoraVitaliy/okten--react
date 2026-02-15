import "./CreateCarComponent.css";
import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidation} from "../../validators/carValidation.ts";
import {addCar} from "../../services/api.service.ts";
import {useState} from "react";
import {CarComponent} from "../car-component/CarComponent.tsx";

export const CreateCarComponent = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: "all",
        resolver: joiResolver(carValidation)
    });

    // console.log(errors);

    const [newCar, setNewCar] = useState<ICar>();

    const createCarHandler = async (data: ICar) => {
        const savedCar: ICar = await addCar(data);
        setNewCar(savedCar);
    };

    return (
        <>
            <form onSubmit={handleSubmit(createCarHandler)} className="create-car-wrapper">
                <div>
                    <label>
                        Brand:
                        <input type="text" {...register("brand")} />
                    </label>
                    <div>{errors.brand?.message}</div>
                </div>

                <div>
                    <label>
                        Year:
                        <input type="number" {...register("year")} />
                    </label>
                    <div>{errors.year?.message}</div>
                </div>

                <div>
                    <label>
                        Price:
                        <input type="number" {...register("price")} />
                    </label>
                    <div>{errors.price?.message}</div>
                </div>

                <button>Save car</button>
            </form>
            {newCar && <div>
                <h4>Saved car:</h4>
                <CarComponent car={newCar}/>
            </div>}
        </>
    );
};