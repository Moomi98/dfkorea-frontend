"use client";

import Link from "next/link";
import getWord from "@/src/constants/words";
import styled from "styled-components";

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
`;

const Menu = styled.li`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-dark-gray);
  &:hover {
    color: var(--color-primary);
  }
`;
export default function Header() {
  const name = "Header";

  return (
    <Root>
      <Logo href="/">{getWord(name, "logo")}</Logo>
      <MenuContainer>
        <Menu>{getWord(name, "productList")}</Menu>
      </MenuContainer>
    </Root>
  );
}
