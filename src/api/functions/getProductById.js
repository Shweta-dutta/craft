import { axiosInstance } from "../axios/axiosIntance"
import { endPoints } from "../endpoints/endPoints"

export const getProductById = async (id) => {
  try {
    const response = await axiosInstance.get(endPoints.details(id))
    return response.data
  } catch (error) {
    throw error
  }
}