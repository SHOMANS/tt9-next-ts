'use client';
import React from 'react';
import { StyledH1, StyledLink, StyledServices, StyledWrapper } from './style';
import Link from 'next/link';
import { StyledFlex } from '@/styles/common';

const HomePage = () => {
  return (
    <StyledWrapper>
      <h1>Hello Home page</h1>
      <h1 className='active'>Hello Home page</h1>

      <StyledServices as='ul'>
        <article>1</article>
        <article>2</article>
        <article>3</article>
        <article>4</article>
      </StyledServices>

      <StyledFlex>
        <StyledLink href='/about'>About</StyledLink>
        <StyledLink href='/counter' color='green'>
          Counter
        </StyledLink>
        <StyledLink href='/posts' color='orange'>
          Posts
        </StyledLink>
      </StyledFlex>
    </StyledWrapper>
  );
};

export default HomePage;
