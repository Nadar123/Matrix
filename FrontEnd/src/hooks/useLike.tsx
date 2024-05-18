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
    setIsLiked((prevIsLiked) => !prevIsLiked);

    // Update local storage
    const storedLikes = localStorage.getItem('likedApps');
    let likedApps = storedLikes ? JSON.parse(storedLikes) : [];
    if (!isLiked) {
      likedApps.push(appId);
    } else {
      likedApps = likedApps.filter((id: any) => id !== appId);
    }
    localStorage.setItem('likedApps', JSON.stringify(likedApps));
  };

  return { isLiked, toggleLike };
}

export default useLike;
