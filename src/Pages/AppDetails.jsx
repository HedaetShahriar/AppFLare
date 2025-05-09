import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const { id } = useParams();
    const appsData = useLoaderData();
    const [app, setApp] = useState(null);
    const [userReviews, setUserReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [newRating, setNewRating] = useState('');
    const [isInstalled, setIsInstalled] = useState(false);
    const [installing, setInstalling] = useState(false);
    const [operation, setOperation] = useState('');
    const handleInstall = () => {
        if (installing) return;

        const nextOperation = isInstalled ? 'uninstall' : 'install';
        setOperation(nextOperation);
        setInstalling(true);

        setTimeout(() => {
            setInstalling(false);
            setIsInstalled(!isInstalled);
            if (!isInstalled) {
                setHasInstalledOnce(true);
            }
        }, 1000); // Simulate delay
    };

    useEffect(() => {
        const appDetails = appsData.find(app => app.id === id);
        setApp(appDetails);
    }, [appsData, id]);

    if (!app) return <div className='text-center text-3xl font-bold mt-20'>Loading...</div>;

    const {
        name,
        developer,
        thumbnail,
        banner,
        description,
        downloads,
        features,
        rating,
        reviews = [],
        category,
    } = app;

    const handleSubmitReview = () => {
        const ratingValue = parseInt(newRating);
        if (!newReview.trim() || isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
            alert("Please enter a valid review and rating between 1 and 5.");
            return;
        }

        const newEntry = {
            comment: newReview.trim(),
            rating: ratingValue,
        };

        setUserReviews([newEntry, ...userReviews]);
        setNewReview('');
        setNewRating('');
    };

    return (
        <div className="max-w-5xl mx-auto mt-8 mb-12 px-4">
            {/* Banner with thumbnail */}
            <div className="relative rounded-2xl md:rounded-3xl shadow-lg">
                <div className="aspect-[16/7] w-full overflow-hidden rounded-2xl md:rounded-3xl">
                    <img
                        src={banner}
                        alt="Banner"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute -bottom-10 left-6 w-24">
                    <div className="aspect-square rounded-2xl shadow-xl border-4 border-white overflow-hidden">
                        <img
                            src={thumbnail}
                            alt="App Icon"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Header Info */}
            <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                    <h1 className="text-4xl font-bold">{name}</h1>
                    <p className="text-gray-500 text-lg mt-1">by {developer}</p>
                </div>
                <button
                    onClick={handleInstall}
                    className="mt-6 md:mt-0 px-8 py-3 bg-blue-600 text-white rounded-xl text-lg shadow-md hover:bg-blue-700 transition"
                >
                    {installing
                        ? operation === 'install'
                            ? 'Installing...'
                            : 'Uninstalling...'
                        : isInstalled
                            ? 'Uninstall'
                            : 'Install'}
                </button>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-gray-700">
                <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-gray-500">Downloads</p>
                    <p className="text-lg font-medium">{downloads}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="text-lg font-medium">{category}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-gray-500">Rating</p>
                    <p className="text-lg font-medium">{rating} / 5</p>
                </div>
            </div>

            {/* Description */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-2">About this app</h2>
                <p className="text-gray-700">{description}</p>
            </div>

            {/* Features */}
            {features?.length > 0 && (
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-800">
                        {features.map((feature, index) => (
                            <li key={index} className="bg-gray-100 p-3 rounded-lg shadow-sm">{feature}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Reviews Display */}
            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">User Reviews</h2>
                <div className="space-y-4">
                    {[...userReviews, ...reviews].map((review, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl shadow border border-gray-100">
                            <div className="text-yellow-500">
                                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                            </div>
                            <p className="text-gray-800 mb-2">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Submit Review Section */}
            <div className="mt-12 bg-gray-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Submit a Review</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <textarea
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        placeholder="Write your review..."
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={4}
                    />
                    <input
                        type="number"
                        value={newRating}
                        onChange={(e) => setNewRating(e.target.value)}
                        placeholder="Rating (1 to 5)"
                        min="1"
                        max="5"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <button
                    onClick={handleSubmitReview}
                    className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
                >
                    Submit Review
                </button>
            </div>
        </div>
    );
};

export default AppDetails;
