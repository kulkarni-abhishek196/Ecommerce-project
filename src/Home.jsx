import FeatureProduct from "./Components/FeatureProduct";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";


export default function Home(){
    return(
        <>
            <HeroSection />
            <FeatureProduct />
            <Services />
            <Trusted />
        </>
    )
}