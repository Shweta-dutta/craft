import axios from "axios";
import { useEffect, useState } from "react"

export const useFetchApi = (url) => {
    const[data, setData] = useState(null);
    const [loading,setLoading] = useState(null);
    const [error, setError] = useState(null);

    const FetchProduct = async () => {
        setLoading(true)
        try {
            const response = await axios.get(url)
            setData(response.data);
            setLoading(false)
        } catch (error) {
            setError(true),
            setLoading(false)
        }
    }

    useEffect(() => {
        FetchProduct()
    },[])

    return{data,error,loading}

}

