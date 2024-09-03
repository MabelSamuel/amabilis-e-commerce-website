import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// function that fetches the data
export const fetchProducts = async() => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data
};

// custom hook
export const useProducts = () =>{
    const {data:products, isLoading, error} = useQuery({
        queryKey:['products'], 
        queryFn: fetchProducts
    }); 
    return { products, isLoading, error }
};
