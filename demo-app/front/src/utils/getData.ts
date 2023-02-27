import { AxiosError } from "axios"
import { ResponseAPI } from "../api"


export const getPosts = async (): Promise<ResponseAPI[]> => {
    try {
        const response = await fetch('http://localhost:8080/posts')

        return response.json()

    } catch (error) {

        const err = error as AxiosError
        console.log(err.message)
        console.log(err.name)

        return []
    }
}
