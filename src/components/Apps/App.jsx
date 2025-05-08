import React from 'react';

const App = ({app}) => {
    
    const{id,name,developer,thumbnail,banner,description,downloads,features,rating,reviews,category,trending}=app;
    return (
        <div className='bg-base-200 rounded-lg shadow-lg '>
            <img className='rounded-lg' src={thumbnail}
            alt="" />
            <h1 className='text-xl font-bold mt-2'>{name}</h1>
            <p className='text-sm font-semibold'>{developer}</p>
            <p className='text-sm font-semibold'>{category}</p>
            <p className='text-sm font-semibold'>{description}</p>
            <p className='text-sm font-semibold'>Rating: {rating}</p>
            <p className='text-sm font-semibold'>Downloads: {downloads}</p>
            <p className='text-sm font-semibold'>Reviews: {reviews}</p>
            <p className='text-sm font-semibold'>Features: {features}</p>
            <p className='text-sm font-semibold'>Trending: {trending ? "Yes" : "No"}</p>
            <p className='text-sm font-semibold'>Banner: {banner}</p>
            <button className='btn btn-neutral mt-2'>Download</button>
            
        </div>
    );
};

export default App;