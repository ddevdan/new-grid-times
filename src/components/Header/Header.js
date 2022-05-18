import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { FAMILIES, QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <IconsWrapper>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </IconsWrapper>

        <Logo />
        <ButtonWrapper>
          <Button>Subscribe</Button>
          <a href="/#">Already a subscriber?</a>
        </ButtonWrapper>
      </MainHeader>
    </header>
  );
};

const ButtonWrapper = styled.div`
  display: none;
  place-content: center;
  justify-self: end;
  gap: 8px;
  & a {
    font-family: ${FAMILIES.serif};
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    text-align: center;

    text-decoration-line: underline;
    color: var(--gray-900);
  }
  @media ${QUERIES.laptopAndUp} {
    display: grid;
  }
`;
const IconsWrapper = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
  justify-content: center;
  place-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default Header;
