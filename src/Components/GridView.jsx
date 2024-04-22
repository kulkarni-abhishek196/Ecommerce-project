import { NavLink } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";

import FormatPrice from "../Helpers/FormatPrice";


export default function GridView(){

    const {products} = useProductContext();
    console.log(products)

    return(
        <div className='grid grid-cols-3 gap-6 mt-4'>
                        {products.map((item, index)=>(
                            <NavLink to={'/singleproduct/' + item.id}>
                                <div className='cursor-pointer'>
                                    <img src={item.image} key={index} alt="" className='rounded-xl hover:scale-90 transition-all duration-500'/>
                                    <div className='flex justify-between'>
                                        <p>{item.company}</p>
                                        <p><FormatPrice price={item.price} /></p>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
        </div>
    )
}