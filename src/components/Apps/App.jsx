import React, { useEffect, useState } from 'react';
import StarRating from '../StarRating';
import { Link } from 'react-router';

const generateRandomLightColor = () => {
    let hue;
    do {
        hue = Math.floor(Math.random() * 360);
    } while (hue >= 40 && hue <= 60); // Skip yellow hues
    const saturation = 70 + Math.random() * 10;   // Pastel saturation
    const lightness = 85 + Math.random() * 10;    // Light tone
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
// Generate a gradient using two random light colors
const generateGradientColor = () => {
    const color1 = generateRandomLightColor(); // First random light color
    const color2 = generateRandomLightColor(); // Second random light color
    return `linear-gradient(to top, ${color1}, ${color2})`;
};

const App = ({ app }) => {

    const { id, name, developer, thumbnail, banner, description, downloads, features, rating, reviews, category, isLatest } = app;
    const [bgColor, setBgColor] = useState('#ffffff');

    useEffect(() => {
        setBgColor(generateGradientColor()); // Generate and apply gradient on mount
    }, []);

    return (
        <Link to={`/apps/${id}`} className='relative flex flex-col items-center justify-center p-8 bg-white rounded-4xl shadow-md hover:shadow-lg transition-shadow duration-300' style={{ background: bgColor }}>
                <div className="avatar flex justify-center items-center mb-3 md:mb-4">
                    <div className="mask mask-squircle bg-cover w-[90%]">
                        <img src={thumbnail} />
                    </div>
                </div>
                <h1 className="text-4xl  font-bold text-center truncate w-full">{name}</h1>
                <h2 className="text-xl mt-3 text-center font-semibold">{developer}</h2>
                <div className='flex  my-3 justify-center text-2xl items-center'>
                    <StarRating rating={rating}></StarRating>
                </div>
                <h2 className='text-xl text-center font-semibold'>{downloads}+ downloads</h2>
        </Link>
    );
};

export default App;