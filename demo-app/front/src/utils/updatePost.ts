import {  ResponseAPI } from '../api/client';

interface Props {
    id: number,
    userId: number,
    body: string,
    title: string
}

export const updatePost = async ({ id, body, title, userId }: Props): Promise<ResponseAPI> => {

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, userId})
    };
    const response = await fetch(`http://localhost:8080/posts/${id}`, requestOptions);
    const data = await response.json();
    return data
}