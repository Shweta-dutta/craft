import { useQuery } from "@tanstack/react-query"
import { FetchProduct } from "../../api/functions/fetchProduct"
import { getProductById } from "../../api/functions/getProductById"

export const useGetProducts = () => {
    return useQuery({
        queryKey:['product'],
        queryFn:FetchProduct,
    })
}

export const useGetProductById = (id) => {
    return useQuery({
      queryKey: ['product', id],
      queryFn: () => getProductById(id),
    })
  }