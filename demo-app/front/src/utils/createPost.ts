import { ResponseAPI } from '../api/client';

export const createPost = async (title: string, body: string, userId: number): Promise<ResponseAPI> => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, userId})
    };
    const response = await fetch('http://localhost:8080/posts', requestOptions);
    const data = await response.json();
    return data
}