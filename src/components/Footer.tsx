import Link from "next/link";

function Footer() {
    return(
        <div className="py-12 bg-black text-gray-400">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-1">
                <div className="flex flex-col justify-start">
                    <Link href={"/about-us"}>
                    <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
                    </Link>
                    <p className="text-white font-extralight text-left text-sm">
                        We, are a music school company, whicch believes in helping students gain their basics and advance step completely, we are here to promote music and musical instrucments among students
                    </p>
                </div>
                <div className="flex flex-col">
                <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                    <p className="text-sm">Home</p>
                    <p className="text-sm">About</p>
                    <p className="text-sm">Courses</p>
                    <p className="text-sm">Contact</p>
                </div>
                <div className="flex flex-col">
                <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
                    <p className="text-sm">Facebook</p>
                    <p className="text-sm">Twitter</p>
                    <p className="text-sm">Instagram</p>
                  
                </div>

                <div className="flex flex-col ">
                    <Link href={"/contactus"}>
                    <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
                    </Link>
                    <p className="text-white font-extralight text-left text-sm">
                       New Delhi
                    </p>
                    <p className="text-white font-extralight text-left text-sm">
                       Email : abc@musicschool.co.in
                    </p>
                    <p className="text-white font-extralight text-left text-sm">
                       Phone : (123) 456789
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;