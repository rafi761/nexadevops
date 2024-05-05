import Link from "next/link"
import { FaCheck } from "react-icons/fa6";
import { Tilt } from 'react-tilt'


const defaultOptions = {
    max: 35,     // max tilt rotation (degrees)
    speed: 400,   // Speed of the enter/exit transition
    glare: true,
    "max-glare": 0.5
}

const Pricing = () => {
    return (
        <div className="px-20 mt-10 grid grid-cols-3 max-sm:grid-cols-1 max-sm:justify-items-center max-sm:px-7">
            <Tilt options={defaultOptions} className="box">
                <h2 className="name">Basic</h2>
                <div className="product flex flex-col gap-y-1 px-4 absolute top-10">
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">Free Consultation</p>
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">Free Domain and Hosting</p>
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">SEO Optimization</p>
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">Responsive Design</p>
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">Max Delivery: 3 Days</p>
                    </div>
                </div>
                <Link href="" className="buy">Order Now</Link>
            </Tilt>

            <Tilt options={defaultOptions} className="box">
                <h2 className="name">Standard</h2>
                <div className="product flex flex-col gap-y-1 px-4 absolute top-10">
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">Free Consultation</p>
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">Free Domain and Hosting</p>
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">SEO Optimization</p>
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">Responsive Design</p>
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">Max Delivery: 5 Days</p>
                    </div>
                </div>
                <Link href="" className="buy">Order Now</Link>
            </Tilt>

            <Tilt options={defaultOptions} className="box">
                <h2 className="name">Premium</h2>
                <div className="product flex flex-col gap-y-1 px-4 absolute top-10">
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">Free Consultation</p>
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">Free Domain and Hosting</p>
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">SEO Optimization</p>
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">Responsive Design</p>
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <FaCheck size={20} className="text-white" />
                        <p className="text-base text-white">Max Delivery: 7 Days</p>
                    </div>
                </div>
                <Link href="" className="buy">Order Now</Link>
            </Tilt>
        </div>
    )
}

export default Pricing