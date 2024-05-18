import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../state/slices/global.features';

interface SinglePostProps {
  post: any;
}

const SinglePost: React.FC<SinglePostProps> = ({ post }) => {
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const dispatch = useDispatch();

  const handleDeletePost = async (postId: number) => {
    try {
      await dispatch(deletePost(postId) as any);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };

  const handleSavePost = (postId: number) => {
    if (editingPostId === postId) {
      setEditingPostId(null); // exit edit mode
    }
  };

  return (
    <div
      key={post.id}
      className='flex justify-between p-4 border w-2/5 mx-auto'
    >
      {editingPostId === post.id ? (
        <input
          className='post-title shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          defaultValue={post.title}
          onChange={handleTitleChange}
        />
      ) : (
        <p>{post.title}</p>
      )}
      <button
        onClick={() => handleDeletePost(post.id)}
        className='hover:text-red-500 cursor-pointer '
      >
        x
      </button>
      <button
        onClick={() => {
          if (editingPostId === post.id) {
            handleSavePost(post.id);
          } else {
            setEditingPostId(post.id);
            setEditedTitle(post.title);
          }
        }}
        className='hover:text-blue-500 cursor-pointer '
      >
        {editingPostId === post.id ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default SinglePost;
