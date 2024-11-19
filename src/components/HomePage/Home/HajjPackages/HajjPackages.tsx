import Image from "next/image"
import React from "react"
import hajj from '../../../../../src/assets/hajj/hajj7.jpeg'
import hajj2 from '../../../../../src/assets/hajj/hajj3.png'
import hajj3 from '../../../../../src/assets/hajj/hajj6.jpg'
import hajj4 from '../../../../../src/assets/hajj/hajj8.png'
import Link from "next/link"
import {
    HiCheckCircle,
    HiOutlineArrowNarrowRight,
} from "react-icons/hi"
import Container from "@/components/Share/Container"
import SectionTitle from "@/components/Share/SectionTitle/SectionTitle"
import './HajjPackages.css'

const HajjPackages = () => {
    const hajjData = [
        {
            id: 1,
            title: "Economy Hajj Package",
            image: hajj,
            day: 50,
            price: "66,500",
        },
        {
            id: 2,
            title: "Platinum Hajj Package",
            image: hajj4,
            day: 30,
            price: "33,500",
        },
        {
            id: 3,
            title: "Premium Hajj Package",
            image: hajj2,
            day: 60,
            price: "55,500",
        },
        {
            id: 4, // Changed to ensure unique id
            title: "Premium Hajj Package",
            image: hajj3,
            day: 60,
            price: "55,500",
        },
    ]

    return (
        <Container>
            <div className="mt-20">
                <SectionTitle
                    heading="Best Hajj Packages 2024 from Bangladesh"
                    subHeading="Some of the renowned and best Hajj agencies in Bangladesh are Universal Travel & Tours, Holy Hajj & Umrah"
                ></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4 place-items-center justify-center place-content-center lg:px-5 xl:px-0">
                    {hajjData.map((hajj) => (
                        <div key={hajj.id} className="singleHajj">
                            <div className="imgWrap">
                                <Image
                                    loading="lazy"
                                    src={hajj.image}
                                    alt={`Hajj Package - ${hajj.title}`}
                                    width={500}
                                    height={500}
                                    className="hajjImg"
                                />
                            </div>
                            <div className="hajjContentWrap">
                                <div className="flex justify-between">
                                    <h3 className="font-semibold mb-2">{hajj.title}</h3>
                                    <div className="day">
                                        <span>{hajj.day} day </span>
                                    </div>
                                </div>
                                <ul>
                                    <li className="flex items-center">
                                        <HiCheckCircle className="text-[#4AB449]" />
                                        <span className="ml-2">3* Hotel In Mecca.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <HiCheckCircle className="text-[#4AB449]" />
                                        <span className="ml-2">3* Hotel In Madinah.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <HiCheckCircle className="text-[#4AB449]" />
                                        <span className="ml-2">Hotel Distance, 300 – 400 Meter.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <HiCheckCircle className="text-[#4AB449]" />
                                        <span className="ml-2">5-6 Persons In Every Room.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <HiCheckCircle className="text-[#4AB449]" />
                                        <span className="ml-2">Saudi / Biman Airlines Ticket.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <HiCheckCircle className="text-[#4AB449]" />
                                        <span className="ml-2">Travel By Ac Bus.</span>
                                    </li>
                                </ul>
                                <div className="flex justify-between w-48 mt-3">
                                    <span className="text-[#4AB449]">Starts From</span>
                                    <b>{hajj.price}</b>
                                </div>
                                <Link href="/hajj/economy">
                                    <button className="hajjBtn">
                                        <small>View Details </small>
                                        <HiOutlineArrowNarrowRight size={20} className="ml-1" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default HajjPackages
