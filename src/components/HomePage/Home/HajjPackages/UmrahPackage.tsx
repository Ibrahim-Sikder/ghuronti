import Image from "next/image"
import React from "react"
import hajj2 from '../../../../../src/assets/hajj/hajj10.jpg'
import hajj3 from '../../../../../src/assets/hajj/hajj9.jpg'
import hajj4 from '../../../../../src/assets/hajj/hajj8.png'
import Link from "next/link"
import {

  HiCheckCircle,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi"
import './HajjPackages.css'
import { HowToReg } from "@mui/icons-material"
import Container from "@/components/Share/Container"
import SectionTitle from "@/components/Share/SectionTitle/SectionTitle"

const UmrahPackage = () => {
  const hajjData = [
    {
      id: 1,
      title: "Economy Hajj Package",
      image: hajj3,
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
      id: 4,
      title: "Premium Hajj Package",
      image: hajj2,
      day: 60,
      price: "55,500",
    },
  ]
  return (
    <Container>
      <div className="mt-20">
        <SectionTitle
          heading="Best Umrah Packages"
          subHeading="Some of the renowned and best Hajj agencies in Bangladesh are
        Universal Travel & Tours, Holy Hajj & Umrah"
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4 place-items-center place-content-center  xl:px-0">
          {hajjData.map((hajj) => (
            <div key={hajj.id} className='singleHajj'>
              <div className='imgWrap'>
                <Image
                  loading="lazy"
                  src={hajj.image}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className='hajjImg'
                />
              </div>
              <div className='hajjContentWrap'>
                <div className="flex justify-between">
                  <h3 className="font-semibold mb-2">{hajj.title}</h3>
                  <div className='day'>
                    <span>{hajj.day} day </span>
                  </div>
                </div>
                <ul>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-[#4AB449]" />{" "}
                    <span className="ml-2">3* Hotel In Mecca.</span>
                  </li>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-[#4AB449]" />{" "}
                    <span className="ml-2">3* Hotel In Madinah.</span>
                  </li>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-[#4AB449]" />{" "}
                    <span className="ml-2">
                      Hotel Distance, 300 – 400 Meter.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-[#4AB449]" />{" "}
                    <span className="ml-2">5-6 Persons In Every Room.</span>
                  </li>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-[#4AB449]" />{" "}
                    <span className="ml-2">Saudi / Biman Airlines Ticket.</span>
                  </li>
                  <li className="flex items-center">
                    <HiCheckCircle className="text-[#4AB449]" />{" "}
                    <span className="ml-2">Travel By Ac Bus.</span>
                  </li>
                </ul>
                <div className="flex justify-between w-48 mt-5">
                  <span className="text-[#4AB449]">Starts From</span>
                  <b>{hajj.price}</b>
                </div>
                <Link href="/hajj/economy">
                  <button className='hajjBtn'>
                    <small>View Details </small>
                    <HiOutlineArrowNarrowRight size={20} className="ml-1" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <SectionTitle
            heading=" Hajj pre-registration Bangladesh 2023- 2024-2025"
            subHeading="Non-resident & Resident Bangladeshi adults and children can apply
        for hajj pre-registration through the Hajj agency."
          ></SectionTitle>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 place-items-center ">
          <div className='registrationCard'>
            <HowToReg className='registerIcon' />
            <div>
              <p className="capitalize">NID scanned soft</p>
              <p> copy/photocopy</p>
            </div>
          </div>
          <div className='registrationCard activeRegister'>
            <HowToReg className='registerIcon' />
            <div>
              <p>Birth certificate s color soft copy</p>
            </div>
          </div>
          <div className='registrationCard'>
            <HowToReg className='registerIcon' />
            <div>
              <p className="capitalize">Valid mobile number + Email id</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <div className='registrationBtn'>
            <button className='rBtn'>
              <h4> Get pre-register</h4>
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default UmrahPackage
