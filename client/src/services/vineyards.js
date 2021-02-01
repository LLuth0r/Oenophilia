import api from './api-config';

export const getAllVineyards = async () => {
    const resp = await api.get('/vineyards');
    return resp.data;
}

export const postVineyard = async (vineyardData) => {
    const resp = await api.post('/vineyards', {vineyard: vineyardData});
    return resp.data;
}

export const deleteVineyard = async (id) => {
    const resp = await api.delete(`/vineyards/${id}`);
    return resp;
}

export const putVineyard = async (id, vineyardData) => {
    const resp = await api.put(`/vineyards/${id}`, {vineyard: vineyardData});
    return resp.data;
}

export const getOneVineyard = async (id) => {
    const resp = await api.get(`/vineyards/${id}`);
    return resp.data;
}