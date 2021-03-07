import api from "../services/api";

export const fechData = async<T>(url: string, body: string): Promise<T> => {

    const reponse = await api.post('/api/games', {
        url,
        body
    });

    return reponse.data as unknown as T;
}