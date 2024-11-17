import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaBimobject,
  FaWhatsappSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import Link from "next/link";
import Container from "../Container";
import './Footer.css'

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <div className="footerWrap">
          <div className="mb-10">
            <h4 className="pb-5">Bangladesh</h4>
            <p className="flex items-center">
              <FaPhoneAlt className="mr-3 text-white" />
              <span>+88 01885071488</span>
            </p>
            <p className="flex items-center my-2 text-white">
              <FaPhoneAlt className="mr-3" />
              <span>+88 01533389338</span>
            </p>
            <p className="flex items-center text-white">
              <FaMapMarkerAlt className="mr-3 text-white" />
              <span>
                Tropicana Tower, L 12, 45 <br /> Topkhana Rd, Purana Paltan
                Dhaka 1000
              </span>
            </p>
          </div>
          <div className="mb-10">
            <h4 className="pb-5">USA Contact</h4>
            <p className="flex items-center text-white">
              <FaPhoneAlt className="mr-3" />
              <span>+17705263551</span>
            </p>
          </div>
          <div className="mb-10">
            <h4 className="pb-5">Social Media</h4>
            <div className="flex ">
              <span>
                <FaFacebook className="socialIcon" />
              </span>
              <span>
                <FaTwitter className="socialIcon" />
              </span>
              <span>
                <FaWhatsappSquare className="socialIcon" />
              </span>
              <span>
                <FaBimobject className="socialIcon" />
              </span>
              <span>
                <FaInstagramSquare className="socialIcon" />
              </span>
            </div>
          </div>
          <div className="privacy">
            <h4 className="pb-5">HELP</h4>
            <p>
              <Link href="/faq">
                <span>FAQ</span>
              </Link>
            </p>
            <p>
              <Link href="/privacy">
                <span>Privacy Policy</span>
              </Link>
            </p>
            <p>
              <Link href="/termAndCondition">
                <span>Term & Condition</span>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
