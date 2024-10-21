import styled from 'styled-components';
import { useState } from 'react';
import theme from '../theme';
import spacing from '../spacing';

const NavStyled = styled.nav`
  background-color: ${theme.secondary};
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  max-height: 80px;
  max-width: 1600px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;

  @media (min-width: 769px) {
    display: flex;
  }
`;

const HeaderStyled = styled.header`
  background-color: ${theme.secondary};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }

  @media (min-width: 769px) {
    min-width: 300px;
    flex: 1;
  }
`;

const UlStyled = styled.ul`
  min-width: 30px;
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;
  padding-top: 80px;
  background-color: ${theme.secondary};

  @media (max-width: 768px) {
    height: calc(100dvh - 80px);
    flex-direction: column;

    &.closed {
      display: none;
    }
  }

  @media (min-width: 769px) {
    justify-content: flex-end;
    padding: 0 20px;

    & li:last-child {
      margin-left: 20px;
    }
  }
`;

const LiStyled = styled.li`
  margin-right: 8px;
`;

const AStyled = styled.a`
  height: 40px;
  padding: 0 10px;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  background-color: transparent;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.5px;
  cursor: pointer;
  text-align: center;

  &.secondary {
    background-color: ${theme.accent};
    font-weight: 600;
    padding: 0 30px;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (prefers-reduced-motion) {
    &:hover {
      font-weight: 600;
    }
  }
`;

const ImgStyled = styled.img`
  width: 160px;

  @media (min-width: 769px) {
    margin-left: ${spacing.xl};
  }

  @media (max-width: 768px) {
    margin-left: ${spacing.l};
  }
`;

const ButtonStyled = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${theme.secondary};
  border: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpenClose = () => setIsOpen(!isOpen);

  return (
    <NavStyled>
      <HeaderStyled>
        <ImgStyled src='/assets/Logo.svg' />
        <ButtonStyled
          aria-label='menu toggle'
          aria-controls='Menu Toggle'
          aria-expanded={isOpen}
          onClick={toggleOpenClose}
        >
          {!isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          )}
        </ButtonStyled>
      </HeaderStyled>
      <UlStyled className={isOpen ? "open" : "closed"}>
        <LiStyled>
          <AStyled aria-label='Find Tutors' tabIndex={1}>Find Tutors</AStyled>
        </LiStyled>
        <LiStyled>
          <AStyled aria-label='For Schools' tabIndex={2}>For Schools</AStyled>
        </LiStyled>
        <LiStyled>
          <AStyled aria-label='Find Courses' tabIndex={3}>Find Courses</AStyled>
        </LiStyled>
        <LiStyled>
          <AStyled aria-label='Find Answers' tabIndex={4}>Find Answers</AStyled>
        </LiStyled>
        <LiStyled>
          <AStyled aria-label='Jobs' tabIndex={5}>Jobs</AStyled>
        </LiStyled>
        <LiStyled>
          <AStyled aria-label='Sign In' tabIndex={6} className='secondary'>Sign In</AStyled>
        </LiStyled>
      </UlStyled>
    </NavStyled>
  );
};

export default Nav;
