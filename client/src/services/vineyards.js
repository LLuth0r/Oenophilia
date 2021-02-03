import api from './api-config';

//Leaving API config here for when I build this out further and sort/filter by vineyard.

export const getAllVineyards = async () => {
    const resp = await api.get('/wines');
    return resp.data;
}

export const postVineyard = async (vineyardData) => {
    const resp = await api.post('/wines', {vineyard: vineyardData});
    return resp.data;
}

export const deleteVineyard = async (id) => {
    const resp = await api.delete(`/wines/${id}`);
    return resp;
}

export const putVineyard = async (id, vineyardData) => {
    const resp = await api.put(`/wines/${id}`, {vineyard: vineyardData});
    return resp.data;
}

export const getOneVineyard = async (id) => {
    const resp = await api.get(`/wines/${id}`);
    return resp.data;
}