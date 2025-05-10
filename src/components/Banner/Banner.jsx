import React, { lazy, Suspense } from 'react';
const BannerSlider = lazy(() => import('./BannerSlider'));

const Banner = ({ appsData }) => {

    return (
        <div className="text-center bg-green-50 py-12 text-slate-700 p-1.5">
            <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">Welcome to AppFlare</h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto drop-shadow-md">
                Discover the best apps in our store. Your one-stop destination for all your app needs!
            </p>
            <div className="container mx-auto">
                 <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                    <BannerSlider appsData={appsData} />
                </Suspense>
            </div>
        </div>
    );
};

export default Banner;
