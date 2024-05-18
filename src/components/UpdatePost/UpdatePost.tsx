import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPost } from '../../state/slices/global.features';
import { IPost } from '../../constants/interfaces.constant';

interface UpdatePostProps {
  postId: number;
}

const UpdatePost: React.FC<UpdatePostProps> = ({ postId }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();

  const handleUpdatePost = () => {
    const updatedPost: IPost = {
      id: postId,
      userId: 1,
      title,
      body,
    };

    dispatch<any>(editPost({ postId, updatedPost }));
  };

  return (
    <div>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Update title'
      />
      <input
        type='text'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='Update body'
      />
      <button onClick={handleUpdatePost}>Update Post</button>
    </div>
  );
};

export default UpdatePost;
