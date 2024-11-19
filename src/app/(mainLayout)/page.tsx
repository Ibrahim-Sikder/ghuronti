import Banner from '@/components/HomePage/Home/Banner/Banner';
import HajjPackages from '@/components/HomePage/Home/HajjPackages/HajjPackages';
import UmrahPackage from '@/components/HomePage/Home/HajjPackages/UmrahPackage';
import React from 'react';

const Home = () => {
  return (
    <>
      <Banner />
      <HajjPackages />
      <UmrahPackage />
    </>
  );
};

export default Home;