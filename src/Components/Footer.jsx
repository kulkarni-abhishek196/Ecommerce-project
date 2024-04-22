import { faBrazilianRealSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Footer(){

    return(
        <>
            <div className="flex justify-center gap-10 mt-12 bg-[#080E4B] py-20">
                <div>
                    <h3 className="text-white">Abhi's store</h3>
                    <h4 className="text-white mt-2">Wanna be yours wanabe yours <br /> wanna be powerful heater</h4>
                </div>
                <div>
                    <h3 className="text-white">Subscribe to get important<br /> updates</h3>
                    <input type="text" className="px-2 py-1 mt-4 rounded-xl" placeholder="Your E-mail"/><br />
                    <button className="text-white btn-submit mt-8">SUBSCRIBE</button>
                </div>
                <div>
                    <h3 className="text-white">Follow Us</h3>
                    <FontAwesomeIcon icon={faBrazilianRealSign} className="text-white"/>
                </div>
                <div>
                    <h3 className="text-white">Call Us</h3>
                    <h3 className="text-white">+91 1234567890</h3>
                </div>
            </div>
        </>
    )
}