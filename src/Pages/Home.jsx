import React from 'react';
import Banner from '../components/Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <section>
                <h1 className='font-bold text-3xl'>Trending Apps</h1>

            </section>
            <section>
                <h1 className='font-bold text-3xl'>Games</h1>
            </section>
            <section>
                <h1 className='font-bold text-3xl'>Productivity Apps</h1>
            </section>
            <section>
                <h1 className='font-bold text-3xl'>Educational Apps</h1>
            </section>
        </>
    );
};

export default Home;