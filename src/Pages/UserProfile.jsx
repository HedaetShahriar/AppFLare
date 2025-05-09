import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { FaEdit } from 'react-icons/fa';
import userIcon from '../assets/userIcon.png';

const MyProfile = () => {
    const { user,updateUserProfile } = useContext(AuthContext);
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
            updateUserProfile(name,photoURL);
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
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                        <img src={photoURL? photoURL: userIcon} />
                    </div>
                </div>
            </div>

            {/* User Info */}
            <div className="text-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 flex justify-center items-center gap-2">
                    {user.displayName}
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="text-gray-500 hover:text-blue-600"
                        title="Edit Profile"
                    >
                        <FaEdit size={16} />
                    </button>
                </h2>
                <p className="text-lg text-gray-500">{user.email}</p>
            </div>

            {/* Edit Form */}
            <form onSubmit={handleSave} className="space-y-5 mt-6">
                <div>
                    <label className="text-gray-600 mb-1 block text-lg">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={!isEditing}
                        className={`w-full border-b py-1 text-lg focus:outline-none ${isEditing
                                ? 'border-blue-500'
                                : 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed'
                            }`}
                    />
                </div>

                <div>
                    <label className="text-gray-600 mb-1 block text-lg">Photo URL</label>
                    <input
                        type="text"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        disabled={!isEditing}
                        className={`w-full border-b py-1 text-lg focus:outline-none ${isEditing
                                ? 'border-blue-500'
                                : 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed'
                            }`}
                    />
                </div>

                {isEditing && (
                    <button
                        type="submit"
                        disabled={saving}
                        className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition disabled:opacity-60 text-lg"
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
