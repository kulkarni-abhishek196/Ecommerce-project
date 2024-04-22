

export default function Contact(){

    return(
        <>
            <div className="flex justify-center pt-12">
                <div>
                    <div className="flex justify-center">
                        <h2 className="font-bold text-2xl">Contact Page</h2>
                    </div>
                    
                    <div className="mt-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24554.965520382837!2d75.3371386004011!3d19.851137630340105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2799bcc4513%3A0x3659c8c1c31849a0!2sChate%20School!5e0!3m2!1sen!2sin!4v1710669842043!5m2!1sen!2sin" 
                            width="800" 
                            height="450" 
                            style={{border:0}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>

                    <div className="flex justify-center mt-12">
                        <form action="https://formspree.io/f/myyrdzaa" method="post">
                            <div>
                                <input className="border-2 border-blue-200 px-4 py-2 rounded-xl" type="text" placeholder="Username" name="username" required/>
                            </div>

                            <div>
                                <input className="border-2 border-blue-200 px-4 py-2 rounded-xl mt-2" type="email" placeholder="Email ID" name="email" required/>
                            </div>

                            <div className="mt-2 px-2 py-2 border-2 border-blue-200 rounded-xl h-36">
                                <textarea placeholder="Enter your message" name="textarea" required></textarea>
                            </div>
                            <button className="btn-submit">Submit</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </>
    )
}