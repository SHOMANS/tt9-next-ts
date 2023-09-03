'use client';
import { getSinglePostAction } from '@/redux/slices/posts';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import React, { useEffect } from 'react';

interface IProps {
  params: { id: string };
}

const PostDetailsPage = ({ params }: IProps) => {
  const dispatch = useAppDispatch();
  const { post, isLoading } = useAppSelector((state) => state.posts);

  useEffect(() => {
    if (+params.id !== post?.id) {
      dispatch(getSinglePostAction(+params.id));
    }
  }, [dispatch, params.id, post?.id]);

  return (
    <div>
      <h1>id: {params.id}</h1>
      {isLoading ? (
        <>Loading....</>
      ) : (
        <>
          <h2>{post?.title}</h2>
          <p>{post?.body}</p>
        </>
      )}
    </div>
  );
};

export default PostDetailsPage;
