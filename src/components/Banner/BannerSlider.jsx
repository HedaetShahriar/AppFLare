// BannerSlider.js
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const BannerSlider = ({ appsData }) => {
    const [latestApps, setLatestApps] = useState([]);
    useEffect(() => {
        const tApps = appsData.filter((app) => app.isLatest === true);
        setLatestApps(tApps);
    }, [appsData]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'center',
            containScroll: 'trimSnaps',
            slidesToScroll: 1,
        },
        [
            Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true, // optional
            }),
        ]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);

    const scrollTo = (index) => {
        if (emblaApi) emblaApi.scrollTo(index);
    };

    return (
        <>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {latestApps.map((app, index) => (
                        <div
                            key={app.id}
                            className="flex-[0_0_90%] md:flex-[0_0_31.5%] -px-4"
                        >
                            <div
                                className={`transition-transform duration-500 ease-in-out ${index === selectedIndex ? 'scale-100' : 'scale-80 opacity-80'
                                    }`}
                            >
                                <Link
                                    to={`/apps/${app.id}`}
                                    className="relative flex flex-col items-center justify-center rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <img
                                        src={app.banner}
                                        className="rounded-t-2xl w-full"
                                        alt={app.name}
                                        loading="lazy"
                                    />
                                    <div className="bg-red-300 rounded-b-2xl w-full">
                                        <h1 className="text-red-950 font-medium">Latest</h1>
                                    </div>
                                    <div className="absolute hover:opacity-30 hover:bg-black top-0 left-0 right-0 bottom-0 rounded-2xl"></div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-6 gap-2">
                {latestApps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === selectedIndex
                                ? 'bg-primary scale-125'
                                : 'bg-gray-400 hover:bg-gray-500'
                            }`}
                    />
                ))}
            </div>
        </>
    );
};

export default BannerSlider;
