import { NavLink } from "react-router-dom";
import FormatPrice from "./Helpers/FormatPrice";


export default function Product({...product}){
    const {id, name, image, price, category} = product;
    return(
        <>
            <NavLink to={"/singleproduct/" + id}>
                <div>
                    <figure>
                        <div>
                            <img className="rounded-xl hover:scale-90 transition-all duration-500 cursor-pointer" src={image} />
                        </div>
                        <figcaption className="">{category}</figcaption>
                    </figure>

                    <div className="flex justify-between">
                        <h3>{name}</h3>
                        <h3><FormatPrice price={price} /></h3>
                    </div>
                </div>
                
            </NavLink>
        </>
    )
}