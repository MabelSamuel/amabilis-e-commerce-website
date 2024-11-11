import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import ProductCollection from './ProductCollection'
import { useProducts } from '../../hooks/useProducts';
import useDebounce from '../../hooks/useDebounce';

function Collection() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [filteredProductsLength ,setFilteredProductsLength] = useState(20);

  const debouncedSearch = useDebounce(search, 1000)

  const handleCategoryChange = (e) =>{
    setCategory(e.target.textContent.toLowerCase());
  }

  const handleSearchInput = (e) =>{
    setSearch(e.target.value.toLowerCase());
  }

  const handleSearchClear = () =>{
    setSearch("")
  }

  const handleSortOrder = (e) =>{
    setSortOrder(e.target.value.toLowerCase());
  }
  const handleMaxPriceFilter = (e) =>{
    setMaxPrice(Number(e.target.value))
  }
  
  const { products, isLoading, error, refetch } = useProducts();

  const filteredProducts = products?.filter((product)=>{
    const matchedCategory = category === "all" || product.category.toLowerCase() === category;
    const matchedSearchInput = product.title.toLowerCase().includes(debouncedSearch);
    const matchedMaxPrice = product.price <= maxPrice;

    return matchedCategory && matchedSearchInput && matchedMaxPrice;
  })?.sort((a, b)=>{
    if (sortOrder === "a-z") {
      return a.title.localeCompare(b.title);
    } else if(sortOrder === "z-a"){
      return b.title.localeCompare(a.title)
    }else{
      return 0;
    }
  });

  useEffect(() => {
    setFilteredProductsLength(filteredProducts.length)
  }, [filteredProducts.length])
  

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[60] flex justify-center items-center bg-white ">
        <div className="w-12 h-12 aspect-square rounded-full border-8 border-lilac border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-6">Error: {error.message}</p>
        <button
          className="bg-lilac text-white py-2 px-4 rounded hover:bg-lilac-dark transition duration-300"
          onClick={() => refetch()}
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <div className=' flex py-16 px-12 gap-8 md:flex-col-reverse md:px-4 sm:flex-col-reverse sm:px-4 '>
        <SideBar handleCategoryChange={handleCategoryChange} handleSearchInput={handleSearchInput} handleMaxPriceFilter={handleMaxPriceFilter} maxPrice={maxPrice} handleSearchClear={handleSearchClear} search={search}/>
        <ProductCollection filteredProducts={filteredProducts} handleSortOrder={handleSortOrder} filteredProductsLength={filteredProductsLength} />
    </div>
  )
}

export default Collection