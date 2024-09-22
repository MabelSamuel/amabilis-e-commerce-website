import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

// function that fetches the data
export const fetchProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data.map((product) => ({
    ...product,
    quantity: 1,
  }));
};

// custom hook
export const useProducts = () => {
  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    if (product){
        setProducts(product)
    }
  }, [product]);

  const incrementProductQuantity = (id) => {
    setProducts((prevProducts)=>
      prevProducts.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decrementProductQuantity = (id) => {
    setProducts((prevProducts)=>
      prevProducts.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  return { products, isLoading, error, refetch, incrementProductQuantity, decrementProductQuantity };
};
