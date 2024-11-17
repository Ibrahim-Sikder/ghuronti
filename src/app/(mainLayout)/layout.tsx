
import LandingPageProvider from "@/lib/Theme/LandingPageProvider";
import React, { ReactNode, Suspense, } from "react";

const Layout = ({ children }: { children: ReactNode }) => {

    return (

        <LandingPageProvider>
            <Suspense fallback={<div>Loading...</div>}>
                {children}
            </Suspense>
        </LandingPageProvider>

    );
};

export default Layout;
