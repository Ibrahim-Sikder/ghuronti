
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
        </LandingPageProvider>

    );
};

export default Layout;
