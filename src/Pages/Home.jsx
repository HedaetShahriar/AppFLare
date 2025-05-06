import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import App from '../components/App/App';

const Home = () => {
    const appData = useLoaderData();

    return (
        <>
            <Banner></Banner>
            <section className='container mx-auto mt-10'>
                <h1 className='font-bold text-3xl'>Trending Apps</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
                    {
                        appData.map(app=>{
                            if(app.trending){
                                return(<App key={app.id} app={app}></App>
                                )
                            }
                        })
                    }

                </div>

            </section >
            <section className='container mx-auto mt-10'>
                <h1 className='font-bold text-3xl'>Games</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                    {
                        appData.map(app=>{
                            if(app.category === "Gaming"){
                                return(<App key={app.id} app={app}></App>
                                )
                            }
                        })
                    }

                </div>
            </section>
            <section className='container mx-auto mt-10'>
                <h1 className='font-bold text-3xl'>Productivity Apps</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                    {
                        appData.map(app=>{
                            if(app.category === "Productivity"){
                                return(<App key={app.id} app={app}></App>
                                )
                            }
                        })
                    }
                    </div>
            </section>
            <section className='container mx-auto mt-10'>
                <h1 className='font-bold text-3xl'>Educational Apps</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                    {
                        appData.map(app=>{
                            if(app.category === "Education"){
                                return(<App key={app.id} app={app}></App>
                                )
                            }
                        })
                    }
                    </div>
            </section>
        </>
    );
};

export default Home;