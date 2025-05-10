import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 text-slate-700 font-sans">
            <h1 className="text-4xl font-bold mb-4 text-slate-800">About AppFlare</h1>
            <p className="text-lg mb-6">
                AppFlare is your one-stop destination for discovering, installing, and reviewing the best apps across categories.
                Whether you're into productivity, gaming, or creativity, AppFlare makes it easy to find the right tools to enhance your digital life.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2 text-slate-800">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
                <li>🧭 Explore trending and category-based apps</li>
                <li>📥 One-click install & uninstall functionality</li>
                <li>⭐ Submit and read genuine user reviews</li>
                <li>🎨 Clean and user-friendly interface</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-2 text-slate-800">Our Mission</h2>
            <p className="text-lg mb-6">
                We aim to simplify the app discovery experience. By curating quality apps and enabling authentic feedback,
                we empower users to make informed decisions and developers to build better products.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">Contact Us</h2>

            {/* DaisyUI Contact Form */}
            <div className='flex flex-col md:flex-row gap-4 justify-between bg-white p-6 rounded-3xl shadow-md'>
                <div className='text-center md:w-[calc(50%-16px)] md:text-left flex justify-center flex-col'>
                    <h1 className='text-3xl font-extrabold text-slate-700'>Contact Us</h1>
                    <p className="text-lg mb-2">Have questions or feedback? We'd love to hear from you!</p>
                    <p className="text-lg mb-4">Email: <a href="mailto:support@appflare.com" className="text-blue-500">support@appflare.com</a></p>
                </div>
                <form className="flex flex-col md:w-[50%]">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your name" className="input mb-2 w-full input-bordered" />

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="you@example.com" className="input mb-2 w-full input-bordered" />

                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea className="textarea w-full textarea-bordered" rows="4" placeholder="Your message..."></textarea>

                    <div className=''>
                        <button className="btn btn-primary mt-4">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default About;
