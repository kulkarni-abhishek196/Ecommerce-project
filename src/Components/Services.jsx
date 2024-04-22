import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faShippingFast, faVault } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";


export default function Services(){
    return(
        <>
            <div className="flex mt-36 justify-center gap-8">
                <div className="bg-gray-200 rounded-xl">
                    <div className="flex justify-center items-center pt-2">
                        <FontAwesomeIcon className="" icon={faShippingFast}/>
                    </div>
                    <div className="flex justify-center items-center">
                        <h1 className="px-2 py-1">Super fast and free delivery</h1>
                    </div>
                </div>
                <div>
                    <div className="bg-gray-200 rounded-xl">
                        <div className="flex justify-center items-center pt-2">
                            <FontAwesomeIcon icon={faShield} />
                        </div>
                        <div className="px-4 py-1">
                            <h1 className="mx-auto">No-contact shipping</h1>
                        </div>
                    </div>
                    <div className="mt-8 bg-gray-200 rounded-xl">
                        <div className="flex justify-center items-center pt-2">
                            <FontAwesomeIcon icon={faMoneyBill} />
                        </div>
                        <div className="px-4 py-1">
                            <h1>Money-back guaranteed</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-xl">
                    <div className="flex justify-center items-center pt-2">
                        <FontAwesomeIcon icon={faVault} />
                    </div>
                    <div className="px-4 py-1">
                        <h1>Super secure payment system</h1>
                    </div>
                    
                </div>
            </div>
        </>
    )
}