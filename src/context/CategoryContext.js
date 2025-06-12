import { createContext } from "react";
const InitialCategoryContext={
    selectedCategory : '',
    setSelectedCategory : ()=>{},
    filteredProducts : [],
    setFilteredCategory:()=>{}
};

const CategoryContext =createContext(InitialCategoryContext);
export default CategoryContext;