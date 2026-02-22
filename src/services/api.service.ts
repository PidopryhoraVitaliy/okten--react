import axios from 'axios';
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = { username: string, password: string, expiresInMins: number };

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {'Content-Type': 'application/json'}
});

axiosInstance.interceptors.request.use(requestObject => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        const accessToken = retrieveLocalStorage<IUserWithTokens>('user').accessToken;
        requestObject.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    return requestObject;
});

export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

export const refresh = async (): Promise<IUserWithTokens> => {
    const user = retrieveLocalStorage<IUserWithTokens>('user');
    const {data} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: user.refreshToken,
        expiresInMins: 10
    });
    user.accessToken = data.accessToken;
    user.refreshToken = data.refreshToken
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>(`/products`);
    return products;
}