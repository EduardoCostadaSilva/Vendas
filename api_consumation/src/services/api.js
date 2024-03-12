import axios from 'axios';

const BASE_URL = 'http://localhost:3002';
const api=axios.create({
    baseURL:BASE_URL,
})

export const fetchMenuItems = async () => {
    try {
        const response = await api.get('/produtos');
        return response.data;
    } catch (error) {
        console.log('Erro ao buscacr itens do menu:', error );
        throw error;
    }
};