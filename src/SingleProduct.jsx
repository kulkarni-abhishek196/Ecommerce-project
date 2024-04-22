import { useEffect, useState } from "react"
import { useProductContext } from "./Context/ProductContext"
import { NavLink, useParams } from "react-router-dom";
import FormatPrice from "./Helpers/FormatPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import { AiOutlineFileProtect } from "react-icons/ai";



const API = "https://api.pujakaitem.com/api/products"



export default function SingleProduct(){

    const[currImage, setCurrImage] = useState(0);
    const[currProduct, setCurrProduct] = useState({});
    const[currStatus, setCurrStatus] = useState();
    const[indexVal, setIndexVal] = useState(0);
    const[count, setCount] = useState(0);
    const[pageReady, setPageReady] = useState(false);

    const {id} = useParams();
    const obj = useProductContext();
    // console.log(obj);
    
    
    useEffect((event)=>{
        if(event && event.preventDefault) {event.preventDefault();};
        obj.getSingleProduct(API + '?id=' + id)
        setCurrProduct(obj.singleProduct);
    },[])

    if(obj.isSingleLoading){
        
        return(
            <div>
                ...loading...
            </div>
        )
    }

    
    const {
        id: alias, 
        name,
        company,
        price,
        description,
        category,
        stock,
        stars,
        reviews,
        image

    } = currProduct;
    console.log(currProduct)
    

    return(
        <>
            <h1>Single Page {name}</h1>
            <div className="pt-12 px-12 flex justify-center gap-12 ">
                <div className="flex mr-48">
                    <div className="">
                        {currProduct.image?.map((item, index)=>(
                            <img className="w-64 h-40 py-1 cursor-pointer hover:scale-90 transition-all duration-500 rounded-xl" key={index} src={item.url} alt="" onClick={()=>{setIndexVal(index)}}/> ))
                        }
                    </div>
                    <div className="ml-4 mt-40">
                        { currProduct.image &&
                            
                            <img className="w-96 h-80 py-1 cursor-pointer rounded-xl" src={image[indexVal].url} alt="" />
                        }
                    </div>
                </div>
                
                <div className="w-96">
                    {
                        currProduct.name &&
                        <h1 className="text-4xl mt-2">{currProduct.name}</h1>
                    }
                    {
                        currProduct.reviews &&
                        <div className="mt-4"><span>{currProduct.stars}{currProduct.reviews}<span className="text-sm">customer reviewed</span></span></div>
                    }
                    {
                        currProduct.price &&
                        <div className="mt-4"><span>MRP: </span><del><FormatPrice price={currProduct.price + 20000} /></del></div>
                    }
                    {
                        currProduct.price && 
                        <div className="mt-4"><span className="text-blue-600">Deal of the Day: <FormatPrice price={currProduct.price} /></span></div>
                    }
                    
                    {
                        currProduct.description && 
                        <p className="w-96 break-words mt-4">{currProduct.description}</p> 
                    }
                    {
                        <div className="mt-12 flex gap-3 justify-between">
                            <div >
                                <TbTruckDelivery size="50" className="hover:scale-90 transition-all duration-500 cursor-pointer"/>
                                <a href="" className="text-sm">Free Delivery</a>
                            </div>
                            <div>
                                <TbReplace size="50" className="hover:scale-90 transition-all duration-500 cursor-pointer"/>
                                <a href="" className="text-sm">30 days replacement</a>
                            </div>
                            <div>
                                <TbTruckReturn size="50" className="hover:scale-90 transition-all duration-500 cursor-pointer"/>
                                <a href="" className="text-sm">Guaranteed Return!</a>
                            </div>
                            <div>
                                <AiOutlineFileProtect size="50" className="hover:scale-90 transition-all duration-500 cursor-pointer"/>
                                <a href="" className="text-sm">2 years of warranty</a>
                            </div>
                            

                        </div>
                    }
                    {
                        <div className="mt-8 bg-gray-200 w-28">
                            <button className="ml-2 px-4 py-1 text-2xl" onClick={()=>setCount(count+1)}>+</button>
                            {count}
                            <button className="px-4 py-1 text-2xl " onClick={()=>count > 0 ? setCount(count-1) : null}>-</button>
                        </div>
                    }
                    {
                        <NavLink to="/cart">
                            <button className="btn-submit mt-12">Add to Cart</button>
                        </NavLink>
                        
                    }
                    
                    
                </div>
            </div>
        </>
    )
}