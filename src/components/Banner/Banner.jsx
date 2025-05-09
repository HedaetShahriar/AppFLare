import React, { Suspense, useEffect, useState } from 'react';
// Lazy load react-slick and its CSS
const Slider = React.lazy(() => import('react-slick'));
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router';

const Banner = ({ appsData }) => {
    const [latestApps, setLatestApps] = useState([]);
    useEffect(() => {
        const tApps = appsData.filter(app => app.isLatest === true);
        setLatestApps(tApps);
    }, [appsData]);
    // const { id, name, developer, thumbnail, banner, description, downloads, features, rating, reviews, category, isLatest } = latestApps;
    const sliderSettings = {
        className: "center",
        dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 100,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600, // Mobile
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    };

    return (
        <div className="text-center py-12 bg-base-200 p-1.5">

            <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">Welcome to AppFlare</h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto drop-shadow-md">Discover the best apps in our store. Your one-stop destination for all your app needs!</p>
            <div className='container mx-auto '>
                {/* <div className="slider-container">
                    <Slider {...sliderSettings} arrows={false}>
                        {
                            latestApps.map(app => (
                                <div key={app.id} className='px-1.5 lg:px-3'>

                                    <Link to={`/apps/${app.id}`} className='relative flex flex-col items-center justify-center rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300'>

                                        <img src={app.banner} className='rounded-t-2xl' alt="" />
                                        <div className='bg-red-300 rounded-b-2xl w-full'>
                                            <h1 className='text-red-950 font-medium'>Latest</h1>
                                        </div>
                                        <div className="absolute hover:opacity-30 hover:bg-black  top-0 left-0 right-0 bottom-0 rounded-2xl">

                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </Slider>
                </div> */}
                <Suspense fallback={<span className='loading loading-spinner loading-xl'></span>}>
                    <Slider {...sliderSettings} arrows={false}>
                        {
                            latestApps.map(app => (
                                <div key={app.id} className='px-1.5 lg:px-3'>
                                    <Link to={`/apps/${app.id}`} className='relative flex flex-col items-center justify-center rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300'>
                                        <img src={app.banner} className='rounded-t-2xl' alt="" />
                                        <div className='bg-red-300 rounded-b-2xl w-full'>
                                            <h1 className='text-red-950 font-medium'>Latest</h1>
                                        </div>
                                        <div className="absolute hover:opacity-30 hover:bg-black top-0 left-0 right-0 bottom-0 rounded-2xl"></div>
                                    </Link>
                                </div>
                            ))
                        }
                    </Slider>
                </Suspense>
            </div>

        </div>
    );
};

export default Banner;