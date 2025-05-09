import React, { useEffect, useState, lazy, Suspense } from 'react';
const BannerSlider = lazy(() => import('./BannerSlider'));

const Banner = ({ appsData }) => {
    const [latestApps, setLatestApps] = useState([]);
    useEffect(() => {
        const tApps = appsData.filter((app) => app.isLatest === true);
        setLatestApps(tApps);
    }, [appsData]);

    return (
        <div className="text-center py-12 bg-base-200 p-1.5">
            <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">Welcome to AppFlare</h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto drop-shadow-md">
                Discover the best apps in our store. Your one-stop destination for all your app needs!
            </p>
            <div className="container mx-auto">
                 <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                    <BannerSlider latestApps={latestApps} />
                </Suspense>
            </div>
        </div>
    );
};

export default Banner;
