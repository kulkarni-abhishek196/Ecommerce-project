import { useContext } from "react"
import { AppContext } from "./Context/ProductContext"

export default function About(){

    const {myname} = useContext(AppContext);

    return(
        <>
            {myname}
        </>
    )
}