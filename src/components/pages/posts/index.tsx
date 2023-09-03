'use client';
import { IPost } from '@/@types/posts';
import {
  addPostAction,
  deletePostAction,
  editPostAction,
  getPosts,
} from '@/redux/slices/posts';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

const POST_DATA_INITIAL_STATE = {
  title: '',
  body: '',
};

const PostsPage = () => {
  const router = useRouter();
  const theme = useTheme();

  const [postData, setPostData] = useState<IPost>(POST_DATA_INITIAL_STATE);

  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const handleEditPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editPostAction(postData));
    setPostData(POST_DATA_INITIAL_STATE);
  };

  useEffect(() => {
    if (!posts.length) {
      dispatch(getPosts());
    }
  }, []);

  const handleCreatePost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPostAction(postData));
    setPostData({
      title: '',
      body: '',
    });
  };

  const handleDeletePost = (id: number) => dispatch(deletePostAction(id));
  return (
    <div>
      {postData?.id ? (
        <></>
      ) : (
        <form onSubmit={handleCreatePost}>
          <input
            type='text'
            value={postData?.title}
            onChange={(e) =>
              setPostData({ ...postData, [e.target.name]: e.target.value })
            }
            name='title'
          />
          <input
            type='text'
            value={postData?.body}
            onChange={(e) => {
              setPostData({ ...postData, [e.target.name]: e.target.value });
            }}
            name='body'
          />
          <button type='submit'>Save</button>
        </form>
      )}
      {posts.map((post) => {
        if (post.id === postData?.id)
          return (
            <form onSubmit={handleEditPost}>
              <input
                type='text'
                value={postData?.title}
                onChange={(e) =>
                  setPostData({ ...postData, [e.target.name]: e.target.value })
                }
                name='title'
              />
              <input
                type='text'
                value={postData?.body}
                onChange={(e) => {
                  setPostData({ ...postData, [e.target.name]: e.target.value });
                }}
                name='body'
              />
              <button type='submit'>Save</button>
            </form>
          );
        return (
          <div
            onClick={() => router.push(`/posts/${post.id}`)}
            key={post.id}
            style={{ margin: '16px 0', cursor: 'pointer' }}
          >
            <h2
              style={{
                color: theme.colors.secondary,
              }}
            >
              {post.title}
            </h2>
            <p>{post.body}</p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                if (post.id) handleDeletePost(post.id);
              }}
            >
              Delete Post
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setPostData(post);
              }}
            >
              Edit Post
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PostsPage;
