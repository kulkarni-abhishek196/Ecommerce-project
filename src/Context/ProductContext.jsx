import { faL } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../Reducers/ProductReducer";


const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState)

    async function getSingleProduct(url){
        console.log(url);
        dispatch({type: "SET_SINGLE_LOADING"})
        try {
            const response = await axios.get(url)
            const singleProduct = await response.data;
            dispatch({type: "SET_SINGLE_DATA", payload: singleProduct})
        } catch (error) {
            dispatch({type: "SINGLE_API_ERROR"})
        }
    }

    useEffect(()=>{
        async function getProducts(url){
            dispatch({type: "SET_LOADING "})
            try {
                const response = await axios.get(url)
                const allProducts = await response.data;
                console.log(allProducts)
                dispatch({type: "SET_API_DATA", payload: allProducts})
            } catch (error) {
                dispatch({type: "API_ERROR"})
            }
        }
        getProducts(API)
    },[])

    return <AppContext.Provider value={{...state, getSingleProduct }}>
        {children}
    </AppContext.Provider>
};

const useProductContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider, AppContext, useProductContext};