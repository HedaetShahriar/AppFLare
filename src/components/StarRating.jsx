import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating, showNumber = false }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 group relative">
      <div className="flex  text-yellow-500">
        {Array(fullStars).fill(0).map((_, i) => <FaStar key={`full-${i}`} />)}
        {hasHalfStar && <FaStarHalfAlt />}
        {Array(emptyStars).fill(0).map((_, i) => <FaRegStar key={`empty-${i}`} />)}
      </div>
      {showNumber && <span className=" text-gray-700 ml-1">{rating.toFixed(1)}</span>}
      <div className="absolute bottom-full mb-1 px-2 py-1 w-full bg-base-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
        {rating} out of 5
      </div>
    </div>
  );
};

export default StarRating;
