import axios from 'axios';
import { useEffect, useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useProductContext } from './Context/ProductContext';
import FormatPrice from './Helpers/FormatPrice';
import { CiGrid32 } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import GridView from './Components/GridView';
import ListView from './Components/ListView';



const apiUrl = "https://api.pujakaitem.com/api/products";
export default function Products(){
    //const[allProducts, setProducts] = useState([]);
    const[display, setDisplay] = useState("grid");

    const {products} = useProductContext();
    console.log(products)
    

    return(
        <>
            <div className='flex justify-around px-12 mt-12 gap-4'>
                <div className="">
                    <input type="text" placeholder="Search" className="border-2 border-sky-200 px-2 py-1"/>
                    <h3 className='mt-4'>Category</h3>
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className='hover:text-blue-500 hover:underline cursor-pointer'>All</li>
                        <li className='hover:text-blue-500 hover:underline cursor-pointer'>Mobile</li>
                        <li className='hover:text-blue-500 hover:underline cursor-pointer'>Laptop</li>
                        <li className='hover:text-blue-500 hover:underline cursor-pointer'>Computer</li>
                        <li className='hover:text-blue-500 hover:underline cursor-pointer'>Accessories</li>
                        <li className='hover:text-blue-500 hover:underline cursor-pointer'>Watch</li>
                    </ul>
                    <h3 className="mt-4">Company</h3>
                    <select name="company" id="company">  
                        <option value="All">All</option>
                        <option value="Apple">Apple</option>
                        <option value="Sony">Sony</option>
                        <option value="Samsung">Samsung</option>
                    </select>
                    <h3 className="mt-4">Colors</h3>
                    <ul className="flex gap-1 mt-2">
                        <li className="text-sm">All</li>
                        <li className="h-3 w-3 bg-red-500 rounded-full"></li>
                        <li className="h-3 w-3 bg-blue-500 rounded-full"></li>
                        <li className="h-3 w-3 bg-green-500 rounded-full"></li>
                    </ul>
                    <div className="mt-4">Price</div>
                    <div className='w-48'><RangeSlider min="1000" max="60000"/></div>
                    <div><button className='mt-4 bg-orange-400 border-2 border-black px-2 py-1'>CLEAR FILTERS</button></div>
                </div>
                <div>
                    <div className='flex gap-8'>
                        <button className="border-2 border-sky-200" onClick={()=>setDisplay("grid")}><CiGrid32 size={30}/></button>
                        <button onClick={()=>setDisplay("list")}><CiBoxList size={30} /></button>
                    </div>
                    {
                        display === "grid" ? <GridView {...products}/> : <ListView {...products}/>
                    }
                    
                </div>
            </div>
        </>
    )
}