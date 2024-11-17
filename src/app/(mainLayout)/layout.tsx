
import Footer from "@/components/Share/Footer/Footer";
import Header from "@/components/Share/Header/Header";
import LandingPageProvider from "@/lib/Theme/LandingPageProvider";
import React, { ReactNode, Suspense, } from "react";

const Layout = ({ children }: { children: ReactNode }) => {

    return (

        <LandingPageProvider>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                {children}
            </Suspense>
            <Footer />
        </LandingPageProvider>

    );
};

export default Layout;
