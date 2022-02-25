import Header from './Header';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FC, useState } from 'react';

const StyledNav = styled.nav`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 114%;
  display: flex;
  /* or 34px */

  letter-spacing: 0.02em;
  text-transform: uppercase;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;

  text-shadow: -1px 1px 0px #14000f;
  text-transform: uppercase;
`;

const StyledDiv = styled.div`
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
  background: linear-gradient(var(--background), var(--inputbackground));
  border: solid var(--text);
  border-width: 0px 0.1px 0.5px 1px;
  padding: 5px;
  box-shadow: -10px 10px 15px var(--background);
  a {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    &:hover {
      background: #ff8585;
      color: var(--background);
    }
  }
`;

const NavHeader = ({ title }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <StyledNav>
      <button
        // style={{ display: isActive ? 'none' : 'flex' }}
        onClick={() => setIsActive(!isActive)}
      >
        {title.toUpperCase()} ▾
      </button>
      <StyledDiv style={{ display: isActive ? 'flex' : 'none' }}>
        <Link to="/your-recipe">Your Recipe</Link>
        <Link to="/recipes">Oslo Recipes</Link>
        <Link to="/about">About</Link>
        <Link to="/admin">Admin</Link>
      </StyledDiv>
    </StyledNav>
  );
};

export default NavHeader;