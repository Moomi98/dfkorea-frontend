"use client";

import TextBox from "@/src/components/common/TextBox";
import Editor from "@/Editor";
import { useState } from "react";
import styled from "styled-components";

import getWord from "@/src/constants/words";
import Button from "@/src/components/common/Button";

import { addProductPost } from "@/api/admin";
import { useRouter } from "next/navigation";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

export default function Write() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const router = useRouter();

  const createProductPost = async () => {
    await addProductPost(title, text);
    router.push("/admin/products/list");
  };

  return (
    <Container>
      <TextBox
        fontWeight={700}
        fontSize="large"
        placeholder={getWord("Common", "title")}
        onChange={setTitle}
      />
      <Editor onChange={setText} />
      <Button
        text={getWord("Common", "register")}
        onClick={createProductPost}
        disabled={title.length === 0 || text.length === 0}
      />
    </Container>
  );
}
