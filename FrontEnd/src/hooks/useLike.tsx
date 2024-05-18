import { useState, useEffect } from 'react';

function useLike(appId: string) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const storedLikes = localStorage.getItem('likedApps');
    if (storedLikes) {
      setIsLiked(JSON.parse(storedLikes).includes(appId));
    }
  }, [appId]);

  const toggleLike = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);

    // Update the local storage
    const storedLikes = localStorage.getItem('likedApps');
    let likedApps = storedLikes ? JSON.parse(storedLikes) : [];
    if (newIsLiked) {
      likedApps.push(appId);
    } else {
      likedApps = likedApps.filter((id: any) => id !== appId);
    }
    localStorage.setItem('likedApps', JSON.stringify(likedApps));
  };

  return { isLiked, toggleLike };
}

export default useLike;
