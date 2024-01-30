"use client";

import { useRouter } from "next/navigation";

import styled from "styled-components";
import { FaBox } from "react-icons/fa";
import { MdPictureInPicture } from "react-icons/md";
import { FaListUl } from "react-icons/fa";

import getWord from "@/src/constants/words";
import Link from "next/link";

const Container = styled.aside`
  width: 200px;
  height: 100%;
  padding: 80px 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: black;
  color: white;
`;

const Logo = styled(Link)`
  letter-spacing: 1.5px;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
`;

const FlexContainer = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: var(--color-primary);
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 10rem;
`;

const MenuItem = styled.li`
  font-size: 1.25rem;
`;

const Hr = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: var(--color-light-gray);
`;

export default function Menu() {
  const router = useRouter();

  return (
    <Container>
      <Logo href="/admin/home">{getWord("Header", "logo")}</Logo>
      <MenuList>
        <FlexContainer href="/admin/productList">
          <FaListUl size="1.2rem" />
          <MenuItem>{getWord("Header", "productList")}</MenuItem>
        </FlexContainer>
        <FlexContainer href="/admin/workRecord">
          <MdPictureInPicture size="1.2rem" />
          <MenuItem>{getWord("Header", "workRecord")}</MenuItem>
        </FlexContainer>
        <Hr />
        <FlexContainer href="/admin/stock">
          <FaBox size="1.2rem" />
          <MenuItem>{getWord("Admin", "stockManagement")}</MenuItem>
        </FlexContainer>
      </MenuList>
    </Container>
  );
}
