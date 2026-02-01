const baseUrl = import.meta.env.BASE_URL;

export const getAll = async <T>(endpoint: string): Promise<T> => {
    return await fetch(`${baseUrl}${endpoint}`, {}).then(res => res.json());
}