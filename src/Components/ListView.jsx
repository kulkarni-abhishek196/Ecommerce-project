import { NavLink } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";
import FormatPrice from "../Helpers/FormatPrice";


export default function ListView({}){
    const {products} = useProductContext();
    console.log(products)
    //const {id, name, image, price, category} = products;
    //console.log(id)

    return(
        <>
            <div className="">
                
                    {products.map((item, index)=>(
                        <NavLink to={'/singleproduct/' + item.id}>
                            <div className="flex gap-4 mt-4 px-4 py-2 justify-around border-2 border-black" key={index}>
                                <div>
                                    <img src={item.image} key={index} alt="" className="rounded-xl"/>
                                </div>
                                <div>
                                    <h2>{item.name}</h2>
                                    <span><FormatPrice price={item.price} /></span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                
            </div>
        </>
    )
}