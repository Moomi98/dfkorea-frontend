"use client";

import { FormEvent, useMemo, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

import Button from "@/src/components/common/Button";
import TextBox from "@/src/components/common/TextBox";

import { login } from "@/api/admin";

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
  const [invalidLogin, setInvalidLogin] = useState(false);
  const router = useRouter();

  const disableButton = useMemo(
    () => id.length < 3 || password.length < 3,
    [id, password]
  );

  const handleOnChange = (value: string, type: string) => {
    if (invalidLogin) setInvalidLogin(false);
    if (type === "id") setId(value);
    else setPassword(value);
  };

  const invalidMessage = useMemo(
    () => (invalidLogin ? getWord("Login", "invalid") : ""),
    [invalidLogin]
  );

  const adminLogin = async () => {
    const result = await login(id, password);
    if (result) {
      router.push("/admin/home");
    } else {
      setInvalidLogin(true);
    }
  };

  return (
    <Container>
      <FlexContainer>
        <Label>아이디</Label>
        <TextBox onChange={(value: string) => handleOnChange(value, "id")} />
      </FlexContainer>
      <FlexContainer>
        <Label>비밀번호</Label>
        <TextBox
          onChange={(value: string) => handleOnChange(value, "password")}
        />
      </FlexContainer>
      <Button
        text="로그인"
        width="100%"
        disabled={disableButton}
        onClick={adminLogin}
      />
      <ValidationMessage>{invalidMessage}</ValidationMessage>
    </Container>
  );
}
