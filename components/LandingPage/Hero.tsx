'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Portfolio from "./Portfolio"
import Pricing from "./Pricing"
import Services from "./Services"
import Footer from "./Footer"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    useGSAP(() => {
        const websiteContentHero: HTMLElement | null = document.querySelector('.website-content__hero');
        gsap.to('.emoji__hero', {
            y: -100,
            duration: 3,
            repeat: -1,
            yoyo: true
        }),
            gsap.from('.desc', {
                y: -100,
                duration: 1,
            }),
            gsap.from(".h1__porto", {
                x: 30,
                duration: 1,
                repeat: -1,
                yoyo: true
            })
        // Pastikan elemen yang Anda cari ada
        if (websiteContentHero) {
            const pinTrigger = ScrollTrigger.create({
                trigger: ".sticky__hero",
                start: "top top",
                end: () => "+=600",
                scrub: 1,
                pin: true
            })
            let tl = gsap.timeline()
            // Animasi menggunakan GSAP
            tl.to(".sticky__hero", {
                scrollTrigger: {
                    start: () => pinTrigger?.start,
                    end: () => pinTrigger?.end,
                    scrub: 1,
                    pin: true
                },
                y: 250,
                scale: 0.75,
                rotation: -15,
                ease: "power3.out"
            });

            tl.fromTo('.website-content__hero', {
                x: -100,
                scale: 0.3,
                rotation: 15
            },
                {
                    scrollTrigger: {
                        start: () => pinTrigger?.start,
                        end: () => pinTrigger?.end,
                        scrub: 1,
                        pin: true
                    },
                    x: 0,
                    scale: 1,
                    rotation: 0,
                    ease: "power3.out"
                });
        }
    }, [])
    return (
        <div className="container__hero">
            <section className="sticky__hero">
                <nav className="s max-sm:justify-center">
                    {/* <div className="logo__hero">
                        <Link href="" className="a max-sm:hidden">Nexa Dev</Link>
                    </div> */}
                    <div className="links__hero">
                        <Link href="" className="a">Home</Link>
                        <Link href="" className="a">Services</Link>
                        <Link href="" className="a">Portfolio</Link>
                        <Link href="" className="a">Pricing</Link>
                    </div>
                </nav>

                <div className="header__hero">
                    <h1 className="h1">NexaDevOps</h1>
                    <div className="desc max-w-xl flex flex-col gap-y-4 mt-5">
                        <h2 className="text-2xl text-white">Kembangkan bisnis anda dan mulai <span className="text-[#bfff00]">tingkatkan penjualan sekarang!</span></h2>
                        <p className="text-sm text-white">Konsultasikan bisnismu bersama kami secara gratis tanpa membeli jasa apapun. Pakar kami akan menganalisis sasaran bisnis Anda dan membuat situs web khusus yang menarik lebih banyak pelanggan, meningkatkan konversi, dan meningkatkan penjualan Anda. Nikmati revisi tanpa batas hingga Anda benar-benar puas dengan hasil dan kinerja dari situs web Anda</p>
                        <Link href="" className="w-fit uppercase px-[0.8em] py-[1em] text-[13px] text-white border border-white rounded-[20px]">Konsultasi Sekarang</Link>
                    </div>
                </div>

                <div className="tracker__hero">
                    <div className="emoji__hero">
                        <div className="emoji-face__hero"></div>
                        <div className="mouth-wrapper__hero"></div>
                    </div>
                </div>
            </section>
            <section className="website-content__hero h-screen max-sm:h-[160vh]">
                <div className="section-header__hero">
                    <h1 className="h1__porto flex items-center justify-end text-5xl max-sm:text-3xl">Our Recent Work</h1>
                </div>
                <div className="mt-10">
                    <Portfolio />
                </div>
            </section>
            <section className="w-full min-h-screen bg-[#15143c] absolute top-[200vh] max-sm:top-[260vh]">
                <h1 className="text-3xl text-white text-center font-semibold">Choose Your Perfect Plan</h1>
                <Pricing />
                <Services />
                <Footer />
            </section>
        </div>
    )
}

export default Hero