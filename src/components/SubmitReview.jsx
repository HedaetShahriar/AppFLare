// src/Components/SubmitReview.js
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const SubmitReview = ({
    newReview,
    setNewReview,
    newRating,
    setNewRating,
    handleSubmitReview,
    hasInstalledOnce,
}) => {
    const [hoverRating, setHoverRating] = useState(null);

    const handleStarHover = (rating) => {
        setHoverRating(rating);
    };

    const handleStarClick = (rating) => {
        setNewRating(rating);
    };

    return hasInstalledOnce ? (
        <div className="mt-12 bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Submit a Review</h2>
            <div className="grid grid-cols-1 gap-4">
                <div className="flex mb-2">
                    {[...Array(5)].map((_, index) => {
                        const starRating = index + 1;
                        return (
                            <FaStar
                                key={starRating}
                                size={32}
                                className="cursor-pointer transition-colors"
                                color={starRating <= (hoverRating || newRating) ? '#facc15' : '#d1d5db'}
                                onMouseEnter={() => handleStarHover(starRating)}
                                onMouseLeave={() => setHoverRating(null)}
                                onClick={() => handleStarClick(starRating)}
                            />
                        );
                    })}
                </div>
                <textarea
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Write your review..."
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows={4}
                />
            </div>
            <button
                onClick={handleSubmitReview}
                className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
            >
                Submit Review
            </button>
        </div>
    ) : (
        <div className="mt-12 bg-yellow-50 p-6 rounded-xl shadow-md text-center text-yellow-800 border border-yellow-300">
            <h2 className="text-xl font-semibold">Install required</h2>
            <p className="mt-2">You must install the app at least once to submit a review.</p>
        </div>
    );
};

export default SubmitReview;
