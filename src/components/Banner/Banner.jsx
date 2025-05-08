import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="text-center py-12 bg-base-200 p-1.5">

            <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">Welcome to AppFlare</h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto drop-shadow-md">Discover the best apps in our store. Your one-stop destination for all your app needs!</p>
            <div className='container mx-auto'>
                {/*TODO: Slider */}
                <div className="mt-8 px-3 -mx-3">
                    <Slider {...sliderSettings} arrows={false}>
                        <div className='px-3'>
                            <div className='h-68 bg-green-400 rounded-lg flex items-center justify-center'>
                                Slide 1
                            </div>
                        </div>
                        <div className='px-3'>
                            <div className='h-68 bg-blue-400 rounded-lg flex items-center justify-center'>
                                Slide 2
                            </div>
                        </div>
                        <div className='px-3'>
                            <div className='h-68 bg-red-400 rounded-lg flex items-center justify-center'>
                                Slide 3
                            </div>
                        </div>
                        <div className='px-3'>
                            <div className='h-68 bg-yellow-400 rounded-lg flex items-center justify-center'>
                                Slide 4
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </div>
    );
};

export default Banner;