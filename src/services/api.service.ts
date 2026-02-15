import axios from 'axios';
import type {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v1",
    headers: {"Content-Type": "application/json"},
});

export const getCars = async (): Promise<ICar[]> => {
    const responce = await axiosInstance.get<ICar[]>("/cars");
    console.log(responce);
    return responce.data;
}

export const addCar = async (car: ICar): Promise<ICar> => {
    const responce = await axiosInstance.post("/cars", car);
    console.log(responce);
    return responce.data;
}