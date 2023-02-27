
export const deletePost = async (id: number): Promise<Boolean> => {
    const requestOptions = {
        method: 'DELETE',
    };
    const {status } = await fetch(`http://localhost:8080/posts/${id}`, requestOptions);
    return status === 200
}