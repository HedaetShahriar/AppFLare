import React from 'react';
import totalApps from '../assets/apps.png';
import successReview from '../assets/reviews.png';
import totalDownloads from '../assets/downloads.png';
import totalDevelopers from '../assets/developers.png';
import CountUp from 'react-countup';

const Services = () => {

    return (
        <div className='container mx-auto pb-10 md:pb-16'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-extrabold md:text-4xl text-slate-700 mb-4'>Best App Store Experience</h1>
                <h4 className='text-lg text-slate-700'>Our platform offers a seamless app store experience with a wide range of verified, high-quality applications for all your needs.</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                <div className='bg-purple-100 py-6 px-8 rounded-2xl'>
                    <div className='w-51 h-51 flex flex-col justify-center items-center md:items-start mx-auto md:mx-0'>
                        <img className='w-14 h-14' src={totalApps} alt="" />
                        <h1 className='font-extrabold md:text-5xl text-4xl mt-4 mb-3'><CountUp end={199} enableScrollSpy />+</h1>
                        <h4 className='font-semibold text-2xl text-gray-400'>Total Apps</h4>
                    </div>
                </div>
                <div className='bg-green-100 py-6 px-8 rounded-2xl'>
                    <div className='w-51 h-51 flex flex-col justify-center items-center md:items-start mx-auto md:mx-0'>
                        <img className='w-14 h-14' src={successReview} alt="" />
                        <h1 className='font-extrabold md:text-5xl text-4xl mt-4 mb-3'><CountUp end={467} enableScrollSpy />+</h1>
                        <h4 className='font-semibold text-2xl text-gray-400'>Total Reviews</h4>
                    </div>
                </div>
                <div className='bg-amber-100 py-6 px-8 rounded-2xl'>
                    <div className='w-51 h-51 flex flex-col justify-center items-center md:items-start mx-auto md:mx-0'>
                        <img className='w-14 h-14' src={totalDownloads} alt="" />
                        <h1 className='font-extrabold md:text-5xl text-4xl mt-4 mb-3'><CountUp end={1900} enableScrollSpy />+</h1>
                        <h4 className='font-semibold text-2xl text-gray-400'>Total Downloads</h4>
                    </div>
                </div>
                <div className='bg-red-100 py-6 px-8 rounded-2xl'>
                    <div className='w-51 h-51 flex flex-col justify-center items-center md:items-start mx-auto md:mx-0'>
                        <img className='w-14 h-14' src={totalDevelopers} alt="" />
                        <h1 className='font-extrabold md:text-5xl text-4xl mt-4 mb-3'><CountUp end={300} enableScrollSpy />+</h1>
                        <h4 className='font-semibold text-2xl text-gray-400'>Total Developers</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;