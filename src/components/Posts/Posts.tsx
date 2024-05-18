import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, RootState } from '../../state/slices/global.features';
import Input from '../UI/Input/Input';
import SearchBox from '../SearchBox/SearchBox';
import { Pagination } from '../UI/Pagination';

const Posts: React.FC = () => {
  const [likes, setLikes] = useState<{ [key: number]: number }>({});

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editedPost, setEditedPost] = useState({ title: '', body: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  const { loading, error, posts, totalPosts } = useSelector(
    (state: RootState) => state.global
  );
  const [localPosts, setLocalPosts] = useState(posts);

  useEffect(() => {
    setLocalPosts(posts);
  }, [posts]);
  console.log(posts);
  const handleDeletePost = async (postId: number) => {
    try {
      await dispatch(deletePost(postId) as any);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedPost({
      ...editedPost,
      [event.target.name]: event.target.value,
    });
  };
  const handleSavePost = (postId: number) => {
    if (editingPostId === postId) {
      setLocalPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? { ...post, title: editedPost.title, body: editedPost.body }
            : post
        )
      );
      setEditingPostId(null);
    }
  };
  const totalPages = Math.ceil(totalPosts / itemsPerPage);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {localPosts.length > 0 &&
        localPosts
          .filter((item: any) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item: any) => (
            <div
              key={item.id}
              className='flex flex-col p-4 border w-3/5 mx-auto'
            >
              {editingPostId === item.id ? (
                <Input
                  name='title'
                  type='text'
                  defaultValue={item.title}
                  onChange={handleInputChange}
                />
              ) : (
                <h3 className='text-lg font-semibold py-4'>{item.title}</h3>
              )}
              {editingPostId === item.id ? (
                <Input
                  name='body'
                  type='text'
                  defaultValue={item.body}
                  onChange={handleInputChange}
                />
              ) : (
                <p>{item.body}</p>
              )}
              <button
                onClick={() => handleDeletePost(item.id)}
                className='hover:text-red-500 cursor-pointer '
              >
                x
              </button>
              <button
                onClick={() => {
                  if (editingPostId === item.id) {
                    handleSavePost(item.id);
                  } else {
                    setEditingPostId(item.id);
                    setEditedPost({ title: item.title, body: item.body });
                  }
                }}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full cursor-pointer  mx-auto'
              >
                {editingPostId === item.id ? 'Save' : 'Edit'}
              </button>
            </div>
          ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Posts;
