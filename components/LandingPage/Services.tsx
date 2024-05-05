import Image from "next/image"

const Services = () => {
    return (
        <section className="w-full min-h-screen flex flex-col gap-y-12 py-20 items-center">
            <h2 className="text-3xl text-white text-center font-medium max-w-xl max-sm:px-4">Why Choose NEXA ?</h2>

            <div className="grid grid-cols-3 gap-y-8 gap-x-16 pb-8 max-sm:grid-cols-1">
                <div className="flex flex-col justify-between px-2 py-4 w-80 h-[390px] bg-white rounded-3xl border">
                    <div className="flex justify-center h-[160px]">
                        <Image
                            src={`/images/card1.png`}
                            alt="Menu"
                            width={180}
                            height={180}
                            className="object-contain"
                        />
                    </div>

                    <h3 className="text-base text-[#1e0a42] text-center font-semibold italic">Free Consultation</h3>
                    <p className="text-sm text-[#1e0a42] text-center ">Before we dive into the development process, we'll schedule a free consultation with you to understand your business goals, target audience, and specific needs. This personalized approach ensures your website is tailored to your unique requirements, maximizing its impact and ROI</p>
                </div>

                <div className="flex flex-col justify-between px-2 py-4 w-80 h-[390px] bg-white rounded-3xl border">
                    <div className="flex justify-center h-[160px]">
                        <Image
                            src={`/images/card2.png`}
                            alt="Menu"
                            width={180}
                            height={180}
                            className="object-contain"
                        />
                    </div>

                    <h3 className="text-base text-[#1e0a42] text-center font-semibold italic">Almost Unlimited Revisions</h3>
                    <p className="text-sm text-[#1e0a42] text-center ">We believe in creating a website that you'll love, which is why we offer almost unlimited revisions. Our team will work closely with you to refine every aspect of your website, from design and layout to content and functionality, until you're completely satisfied.</p>
                </div>

                <div className="flex flex-col justify-between px-2 py-4 w-80 h-[390px] bg-white rounded-3xl border">
                    <div className="flex justify-center h-[160px]">
                        <Image
                            src={`/images/card3.png`}
                            alt="Menu"
                            width={180}
                            height={180}
                            className="object-contain"
                        />
                    </div>

                    <h3 className="text-base text-[#1e0a42] text-center font-semibold italic">SEO Optimization</h3>
                    <p className="text-sm text-[#1e0a42] text-center ">In today's digital world, visibility is crucial. NEXA's expert SEO optimization will ensure your website ranks high in search engine results, attracting more organic traffic and potential customers. This, in turn, will boost brand awareness, generate leads, and drive sales.</p>
                </div>

                <div className="flex flex-col justify-between px-2 py-4 w-80 h-[390px] bg-white rounded-3xl border">
                    <div className="flex justify-center h-[160px]">
                        <Image
                            src={`/images/card4.png`}
                            alt="Menu"
                            width={180}
                            height={180}
                            className="object-contain"
                        />
                    </div>

                    <h3 className="text-base text-[#1e0a42] text-center font-semibold italic">Responsive Design</h3>
                    <p className="text-sm text-[#1e0a42] text-center ">Your website should adapt seamlessly to any screen size, whether it's a desktop, tablet, or smartphone. NEXA's responsive design ensures an optimal user experience across all devices, keeping visitors engaged and converting leads into customers.</p>
                </div>

                <div className="flex flex-col justify-between px-2 py-4 w-80 h-[390px] bg-white rounded-3xl border">
                    <div className="flex justify-center h-[160px]">
                        <Image
                            src={`/images/card5.png`}
                            alt="Menu"
                            width={180}
                            height={180}
                            className="object-contain"
                        />
                    </div>

                    <h3 className="text-base text-[#1e0a42] text-center font-semibold italic">Best Security System</h3>
                    <p className="text-sm text-[#1e0a42] text-center ">Your website's security is paramount. NEXA implements the industry's best security systems to protect your valuable data and prevent cyber threats. With our robust security measures, you can have peace of mind knowing your website is safeguarded.</p>
                </div>

                <div className="flex flex-col justify-between px-2 py-4 w-80 h-[390px] bg-white rounded-3xl border">
                    <div className="flex justify-center h-[160px]">
                        <Image
                            src={`/images/card6.png`}
                            alt="Menu"
                            width={180}
                            height={180}
                            className="object-contain"
                        />
                    </div>

                    <h3 className="text-base text-[#1e0a42] text-center font-semibold italic">24/7 Customer Support</h3>
                    <p className="text-sm text-[#1e0a42] text-center ">We're here to support you every step of the way. NEXA's dedicated customer support team is available 24/7 to answer your questions, address any concerns, and provide ongoing assistance. With our unwavering support, you'll never feel alone.</p>
                </div>
            </div>
        </section>
    )
}

export default Services