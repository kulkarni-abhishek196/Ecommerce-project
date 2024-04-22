import { faBriefcase, faGlasses, faRegistered, faSitemap, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Trusted(){
    return(
        <div className="flex justify-center mt-12">
            <div className="px-12 py-12 rounded-xl bg-gray-200">
                <h3 className="pl-36">Trusted by 1000+ clients</h3>
                <div className="flex gap-12 mt-4">
                    <FontAwesomeIcon size="3x" icon={faBriefcase} />
                    <FontAwesomeIcon  size="3x" icon={faTags} />
                    <FontAwesomeIcon size="3x" icon={faRegistered} />
                    <FontAwesomeIcon size="3x" icon={faSitemap} />
                    <FontAwesomeIcon size="3x" icon={faGlasses} />
                </div>
            </div>
        </div>
    )
}