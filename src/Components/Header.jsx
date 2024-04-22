import { faRightFromBracket, faRightLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"
import About from "../About"
import Contact from "../Contact"
import Products from "../Products"
import Home from "../Home"



export default function Header(){

    return(
        <>
            <div className='w-full bg-gray-200 flex px-12 py-2'>
            <div>
                <FontAwesomeIcon icon={faRightLeft} />
            </div>
            <div className="flex flex-grow justify-end mr-">
                <ul className="flex gap-12">
                <li className="li-items">
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li className="li-items">
                    <NavLink to="/about" >About</NavLink>
                </li>
                <li className="li-items">
                    <NavLink to="/products" >Products</NavLink>
                </li>
                <li className="li-items">
                    <NavLink to="/contact" >Contact</NavLink>
                </li>
                <li className="li-items">
                    <NavLink to="/cart"> <FontAwesomeIcon icon={faShoppingCart} /></NavLink>
                </li>
                </ul>
            </div>
            </div>
        </>
    )
}