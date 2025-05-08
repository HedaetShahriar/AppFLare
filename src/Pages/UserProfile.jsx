import React, { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../provider/AuthProvider';
import { FaEdit } from 'react-icons/fa';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [success, setSuccess] = useState('');
    const [saving, setSaving] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        setSuccess('');

        try {
            await updateProfile(user, {
                displayName: name,
                photoURL: photoURL,
            });
            setSuccess('✓ Profile updated');
            setTimeout(() => setSuccess(''), 3000);
            setIsEditing(false);
        } catch (error) {
            alert('Failed to update profile.');
        }

        setSaving(false);
    };

    if (!user) return <div className="text-center mt-20 text-gray-500">Loading profile...</div>;

    return (
        <div className="max-w-sm mx-auto mt-16 bg-white rounded-2xl shadow-lg px-6 py-8">
            {/* App Logo */}
            <div className="flex justify-center mb-6">
                <img
                    src="/logo.png" // Replace with your app's logo
                    alt="App Logo"
                    className="w-16 h-16"
                />
            </div>

            {/* User Info */}
            <div className="text-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 flex justify-center items-center gap-2">
                    {user.displayName}
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="text-gray-500 hover:text-blue-600"
                        title="Edit Profile"
                    >
                        <FaEdit size={16} />
                    </button>
                </h2>
                <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            {/* Edit Form */}
            <form onSubmit={handleSave} className="space-y-5 mt-6">
                <div>
                    <label className="text-gray-600 mb-1 block text-sm">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={!isEditing}
                        className={`w-full border-b py-1 text-sm focus:outline-none ${
                            isEditing
                                ? 'border-blue-500'
                                : 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed'
                        }`}
                    />
                </div>

                <div>
                    <label className="text-gray-600 mb-1 block text-sm">Photo URL</label>
                    <input
                        type="text"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        disabled={!isEditing}
                        className={`w-full border-b py-1 text-sm focus:outline-none ${
                            isEditing
                                ? 'border-blue-500'
                                : 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed'
                        }`}
                    />
                </div>

                {isEditing && (
                    <button
                        type="submit"
                        disabled={saving}
                        className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition disabled:opacity-60 text-sm"
                    >
                        {saving ? 'Saving...' : 'Save'}
                    </button>
                )}

                {success && (
                    <div className="text-center text-green-600 text-sm">{success}</div>
                )}
            </form>
        </div>
    );
};

export default MyProfile;
