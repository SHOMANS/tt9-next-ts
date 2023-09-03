import { StyledFlex } from '@/styles/common';
import Link from 'next/link';
import { keyframes, styled } from 'styled-components';

const myColor = '#789';

export const StyledWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
  color: ${({ theme }) => theme.colors.primary};

  /* &:hover {
    background-color: #000;
  }

  h1 {
    color: blue;
  }

  .active {
    color: yellow;
  }

  h1:hover {
    color: red;
  } */
`;

export const StyledServices = styled(StyledFlex)`
  justify-content: space-evenly;
  article {
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.paper};
  }
`;

const rotate = keyframes`
from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const StyledLink = styled(Link)`
  /* background-color: ${(props) => props.color || 'red'};
  color: ${(props) => props.href === '/about' && 'purple'}; */
  color: ${({ theme }) => theme.colors.secondary}; */

  /* ${(props) => `
    background-color: ${props.color || 'red'};
    color: ${props.href === '/about' && 'purple'};
  `} */
  animation: ${rotate} 2s linear infinite;
  /* animation: rotate 2s linear infinite; */

  /* @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  } */
`;
