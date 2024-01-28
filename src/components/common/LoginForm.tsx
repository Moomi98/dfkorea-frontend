"use client";

import { useMemo, useState } from "react";
import styled from "styled-components";

import Button from "@/src/components/common/Button";
import TextBox from "@/src/components/common/TextBox";
import getWord from "@/src/constants/words";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  width: 80px;
`;

const ValidationMessage = styled.span`
  color: red;
  font-size: 0.75rem;
  text-align: center;
`;

export default function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [invalidMessage, setInvalidMessage] = useState("");

  const disableButton = useMemo(
    () => id.length < 3 || password.length < 3,
    [id, password]
  );

  return (
    <Container>
      <FlexContainer>
        <Label>아이디</Label>
        <TextBox onChange={setId} />
      </FlexContainer>
      <FlexContainer>
        <Label>비밀번호</Label>
        <TextBox onChange={setPassword} />
      </FlexContainer>
      <Button text="로그인" width="100%" disabled={disableButton} />
      <ValidationMessage>{invalidMessage}</ValidationMessage>
    </Container>
  );
}
