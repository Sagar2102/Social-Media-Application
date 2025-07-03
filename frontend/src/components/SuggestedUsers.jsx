

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import axios from 'axios';
import { toast } from 'sonner';
import { setAuthUser } from '@/redux/authSlice';

const SuggestedUsers = () => {
    const dispatch = useDispatch();
    const { suggestedUsers, user } = useSelector(store => store.auth);
    const [loadingIds, setLoadingIds] = useState([]);
    const [localFollowingState, setLocalFollowingState] = useState({});

    const handleFollowToggle = async (targetId) => {
        try {
            setLoadingIds(prev => [...prev, targetId]);

            // Optimistically update local state immediately
            const isCurrentlyFollowing = isFollowing(targetId);
            setLocalFollowingState(prev => ({
                ...prev,
                [targetId]: !isCurrentlyFollowing
            }));

            // Toggle follow/unfollow
            const res = await axios.post(`http://localhost:8000/api/v1/user/followorunfollow/${targetId}`, {}, {
                withCredentials: true,
            });

            toast.success(res.data.message);

            // Refetch updated user data
            const updated = await axios.get('http://localhost:8000/api/v1/user/me', {
                withCredentials: true,
            });
            dispatch(setAuthUser(updated.data.user));
            
            // Clear local state after successful update
            setLocalFollowingState(prev => {
                const newState = { ...prev };
                delete newState[targetId];
                return newState;
            });
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong');
            
            // Revert optimistic update on error
            setLocalFollowingState(prev => {
                const newState = { ...prev };
                delete newState[targetId];
                return newState;
            });
        } finally {
            setLoadingIds(prev => prev.filter(id => id !== targetId));
        }
    };

    const isFollowing = (targetId) => {
        // Check local state first (for optimistic updates)
        if (localFollowingState.hasOwnProperty(targetId)) {
            return localFollowingState[targetId];
        }
        // Then check the actual user state
        return user?.following?.some(id => id === targetId || id._id === targetId) || false;
    };

    return (
        <div className='my-10'>
            <div className='flex items-center justify-between text-sm'>
                <h1 className='font-semibold text-gray-600'>Suggested for you</h1>
                <span className='font-medium cursor-pointer'>See All</span>
            </div>

            {suggestedUsers.map((u) => {
                const following = isFollowing(u._id);
                const isLoading = loadingIds.includes(u._id);

                return (
                    <div key={u._id} className='flex items-center justify-between my-5'>
                        <div className='flex items-center gap-2'>
                            <Link to={`/profile/${u._id}`}>
                                <Avatar>
                                    <AvatarImage src={u.profilePicture} alt="profile" />
                                    <AvatarFallback>{u.username?.[0]?.toUpperCase()}</AvatarFallback>
                                </Avatar>
                            </Link>
                            <div>
                                <h1 className='font-semibold text-sm'>
                                    <Link to={`/profile/${u._id}`}>{u.username}</Link>
                                </h1>
                                <span className='text-gray-600 text-sm'>{u.bio || 'Bio here...'}</span>
                            </div>
                        </div>

                        <button
                            disabled={isLoading}
                            onClick={() => handleFollowToggle(u._id)}
                            className={`text-xs font-bold cursor-pointer transition-colors duration-200 disabled:opacity-50 ${
                                following ? 'text-red-500 hover:text-red-600' : 'text-[#3BADF8] hover:text-[#3495d6]'
                            }`}
                        >
                            {isLoading ? '...' : following ? 'Unfollow' : 'Follow'}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default SuggestedUsers;