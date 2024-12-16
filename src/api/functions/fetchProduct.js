import { axiosInstance } from "../axios/axiosIntance"
import { endPoints } from "../endpoints/endPoints"

export const FetchProduct = async () => {
    try {
        const {data} = await axiosInstance.get(endPoints.product)
        return data
    } catch (error) {
        console.log(data)
    }
}