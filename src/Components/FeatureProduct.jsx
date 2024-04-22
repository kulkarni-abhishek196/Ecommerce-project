import { useContext } from "react"
import { useProductContext } from "../Context/ProductContext"
import Product from "../Product";


export default function FeatureProduct(){

    const obj = useProductContext(); 
    console.log(obj.featureProducts)

    if(obj.isLoading){
        return <div>
            ...Loading...
        </div>
    }

    return(
        <div className="px-20 mt-20 ">
            <div>
                <h3 className="text-2xl">Shop Now</h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    obj.featureProducts.map((product)=>{
                        return <Product key={product.id} {...product}/>
                        // <img className="rounded-xl hover:scale-75 transition-all duration-500 cursor-pointer"src={product.image} alt="" />
                    })
                }
            </div>
            
        </div>
    )
    
}