import React, { useEffect, useState } from 'react';
import App from './App';

const TrendingApps = ({ appsData }) => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        if (appsData && appsData.length > 0) {
            const sortedApps = [...appsData].sort((a, b) => b.rating - a.rating);
            const slicedApps = sortedApps.slice(0, 4);
            setApps(slicedApps);
        }
    }, [appsData]);
    return (
        <div className='my-12'>
            <h1 className='font-bold text-3xl text-center'>Trending Apps</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4'>
                {
                    apps.map(app => <App key={app.id} app={app}></App>)
                }
            </div>
        </div>
    );

};

export default TrendingApps;