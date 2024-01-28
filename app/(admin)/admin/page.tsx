"use client";

import styled from "styled-components";

import LoginForm from "@/src/components/common/LoginForm";

const Container = styled.main`
  margin: 0 auto;
  width: 400px;
  height: calc(100% - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 10%;
  }
`;

export default function Admin() {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}
