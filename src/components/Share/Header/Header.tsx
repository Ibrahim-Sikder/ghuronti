'use client'
import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../../src/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import {
    Flight,
    Hotel,
    BookOnline,
    TransferWithinAStation,
    BusAlert,
    DirectionsRailway,

} from "@mui/icons-material";
import Typewriter from "typewriter-effect";
import './Header.css'

const Header: React.FC = () => {
    const [stickyMenu, setStickyMenu] = useState<boolean>(false);
    const [mobileMenu, setMobileMenu] = useState<boolean>(true);

    const navRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setMobileMenu((prev) => !prev);
        navRef.current?.classList.toggle("active");
    };

    useEffect(() => {
        const handleScroll = () => {
            setStickyMenu(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);





    return (
        <section className='navBarMainWrap'>
            <div className='navbarMain'>

                <div className={`${stickyMenu ? 'sticky' : ""}`}>
                    <div className='navigationMain'>
                        <div className='navigationContent'>
                            <div className='navigationLeft'>
                                <div className='logo'>
                                    <div className="cursor-pointer">
                                        <Image
                                            loading="lazy"
                                            className='logoImg'
                                            src={Logo}
                                            alt="Logo"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='inputDiv'>
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Search Flight, Hotel, Visa, & Tours package!",
                                            "Search Tours, Buses, Trains, Hajj & Umrah package!",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        wrapperClassName: 'typeWiter',
                                    }}
                                />

                            </div>
                            <div className='buttonWrap'>
                                <div className='signUpBtn'>
                                    <Link href="/signup">
                                        <button>Sign Up</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                {/* Mobile menu */}
                <div onClick={toggleMobileMenu} ref={navRef} className='bar'>
                    <div>
                        <span className={mobileMenu ? "" : 'bar1'}></span>
                        <span className={mobileMenu ? "" : 'bar2'}></span>
                        <span className={mobileMenu ? "" : 'bar3'}></span>
                    </div>
                </div>
                <div className='mobileToggleSideMenu'>
                    <div
                        className={mobileMenu ? 'menuWraps' : 'hideMenu'}
                    >
                        <ul className='menu'>
                            <div className='wrapMenu'>
                                <Link href="/hajjUmra">
                                    <li className='firstChild'>
                                        <DirectionsRailway className='menuIcon' />
                                        <p className="ml-3">Hajj & Umrah</p>
                                    </li>
                                </Link>
                                <Link href="/flight">
                                    <li className='activeLink'>
                                        <Flight className='menuFlightIcon' />
                                        <p className="ml-3">Flight</p>
                                    </li>
                                </Link>
                                <Link href="/hotel">
                                    <li>
                                        <Hotel className='menuIcon' />
                                        <p className="ml-3">Hotel</p>
                                    </li>
                                </Link>
                                <Link href="/visa">
                                    <li>
                                        <BookOnline className='menuIcon' />
                                        <p className="ml-3">Visa</p>
                                    </li>
                                </Link>
                                <Link href="/tours">
                                    <li>
                                        <TransferWithinAStation className='menuIcon' />
                                        <p className="ml-3">Tours</p>
                                    </li>
                                </Link>
                                <Link href="/bus">
                                    <li>
                                        <BusAlert className='menuIcon' />
                                        <p className="ml-3">Buses</p>
                                    </li>
                                </Link>
                                <Link href="/train">
                                    <li className='lastChild'>
                                        <DirectionsRailway className='menuIcon' />
                                        <p className="ml-3">Trains</p>
                                    </li>
                                </Link>
                            </div>
                        </ul>
                        <div className='securityInfo'>
                            <Link href="/login">
                                <button>Login</button>
                            </Link>
                            <Link href="/signup">
                                <button className='signUpBtn'>Sign Up</button>
                            </Link>
                            <Link href="/aboutUs">
                                <p>About Us</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
