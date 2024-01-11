"use client";

import Link from "next/link";
import getWord from "@/src/constants/words";
import styled, { css, keyframes } from "styled-components";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import useWindowSize from "@/src/hooks/useWindowSize";
import { useState } from "react";

import { fadeIn, fadeOut } from "@/src/constants/animations";

const open = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const close = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(100%);
        opacity: 0;
    }
`;

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 1rem;
  background-color: transparent;
`;
const Logo = styled(Link)`
  letter-spacing: 1.5px;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
`;

const MenuContainer = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const HamburgerMenu = styled(IoMdMenu)`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const Menu = styled.li`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-dark-gray);
  &:hover {
    color: var(--color-primary);
  }
`;

const Overlay = styled.div<{ open: boolean }>`
  position: absolute;
  background-color: var(--color-overlay);
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: ${(props) =>
    props.open
      ? css`
          ${fadeIn} 0.3s linear
        `
      : css`
          ${fadeOut} 0.3s linear
        `};
`;

const OverlayedMenu = styled.aside<{ open: boolean }>`
  width: 80%;
  height: 100%;
  background-color: white;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: flex-start;
  padding: 2rem 1rem 2rem 3rem;
  font-size: 1.5rem;
  animation: ${(props) =>
    props.open
      ? css`
          ${open} 0.3s linear
        `
      : css`
          ${close} 0.3s linear
        `};
`;

const Hr = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: var(--color-light-gray);
`;

const CloseButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

export default function Header() {
  const name = "Header";
  const isMobileSize = useWindowSize();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [closeMenuAnimation, setCloseMenuAnimation] = useState<boolean>(false);

  const handleMenu = () => {
    if (openMenu) {
      setCloseMenuAnimation(true);
      setTimeout(() => {
        setOpenMenu(false);
      }, 300);
    } else {
      setCloseMenuAnimation(false);
      setOpenMenu(true);
    }
  };

  return (
    <Root>
      <Logo href="/">{getWord(name, "logo")}</Logo>
      <HamburgerMenu onClick={handleMenu} size={32} />
      {isMobileSize && openMenu && (
        <>
          <Overlay open={!closeMenuAnimation} onClick={handleMenu} />
          <OverlayedMenu open={!closeMenuAnimation}>
            <CloseButtonContainer>
              <IoMdClose size={40} onClick={handleMenu} />
            </CloseButtonContainer>
            <Menu>{getWord(name, "productList")}</Menu>
            <Hr />
            <Menu>{getWord(name, "productList")}</Menu>
            <Hr />
          </OverlayedMenu>
        </>
      )}
      <MenuContainer>
        <Menu>{getWord(name, "productList")}</Menu>
        <Menu>{getWord(name, "productList")}</Menu>
      </MenuContainer>
    </Root>
  );
}
