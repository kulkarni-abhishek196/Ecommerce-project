

export default function HeroSection(){

    return(
        <>
            <div className="flex mt-24 justify-center gap-4">
                <div>
                    <p>Welcome to</p>
                    <h1 className="font-bold text-4xl mt-2">Abhi's Store</h1>
                    <p className="mt-2">This store has a great legacy for making people happy.<br />
                        In the time of quick commerce there's one store for<br />
                        our customer who takes care of their shoopping experience.
                    </p>
                    <button className="btn-submit">Shop Now</button>
                </div>

                <div>
                    <img src="src/assets/Images/images.jpeg" alt="" />
                </div>
            </div>
        </>
    )
}