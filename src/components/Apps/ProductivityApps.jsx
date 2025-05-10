import React, { useEffect, useState } from 'react';
import App from './App';

const ProductivityApps = ({ appsData }) => {
    const [apps, setApps] = useState([]);
    useEffect(() => {
        const tApps = appsData.filter(app => app.category === 'Productivity');
        setApps(tApps);
    }, [appsData]);
    return (
        <div className='my-12'>
            <h1 className='font-bold text-4xl my-8 text-slate-700 text-center'>Productivity Apps</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4'>
                {
                    apps.map(app => <App key={app.id} app={app}></App>)
                }
            </div>
        </div>
    );
};

export default ProductivityApps;