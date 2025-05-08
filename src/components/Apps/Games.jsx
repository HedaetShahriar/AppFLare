import React, { useEffect, useState } from 'react';
import App from './App';

const Games = ({ appsData }) => {
    const [apps, setApps] = useState([]);
    useEffect(() => {
        const tApps = appsData.filter(app => app.category === 'Games');
        setApps(tApps);
    }, [appsData]);
    return (
        <div className='my-12'>
            <h1 className='font-bold text-3xl text-center'>Games</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                {
                    apps.map(app => <App key={app.id} app={app}></App>)
                }

            </div>
        </div>
    );
};

export default Games;