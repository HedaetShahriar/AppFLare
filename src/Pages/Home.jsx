import Banner from '../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import TrendingApps from '../components/Apps/TrendingApps';
import Games from '../components/Apps/Games';
import EducationalApps from '../components/Apps/EducationalApps';
import ProductivityApps from '../components/Apps/ProductivityApps';
import React, { Suspense } from 'react';
import Services from '../components/Services';



const Home = () => {
    const appsData = useLoaderData();

    return (
        <>
            <Banner appsData={appsData}></Banner>
            <div className='container mx-auto p-1.5'>
                <TrendingApps appsData={appsData}></TrendingApps>
                <Games appsData={appsData}></Games>
                <ProductivityApps appsData={appsData}></ProductivityApps>
                <EducationalApps appsData={appsData}></EducationalApps>
            </div>
            {/* why using this store section */}
            <Services></Services>
        </>
        
    );
};

export default Home;