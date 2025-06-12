import { createContext } from "react";

 const InitialParams={
    products : [],
    filterText : '',
    setFilterText : ()=>{}
    

 }
const ProductContext = createContext(InitialParams) 
export default ProductContext;