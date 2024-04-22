
export default function ProductReducer(state, action){
    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true
            }
        case "API_ERROR":
            return{
                ...state,
                isError: true
            }
        case "SET_API_DATA":
            const featureData = action.payload.filter((item)=>{
                return item.featured == true
            })
          
            return{
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData
            }
        
        case "SET_SINGLE_LOADING":
            return{
                ...state,
                isSingleLoading: true
            }
            
        case "SINGLE_API_ERROR":
            return{
                ...state,
                isSingleLoading: false,
                isSingleError: true,
            }
        case "SET_SINGLE_DATA":
            return{
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload
            }
    
        default:
            return state
    }
}