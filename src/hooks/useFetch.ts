import {useEffect, useState} from "react";

export const useFetch = <T>(url: string, defaultValue: T): T => {

    const [data, setData] = useState<T>(defaultValue);

    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => setData(data));
    }, []);

    return data;
}