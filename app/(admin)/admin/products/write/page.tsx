"use client";

import TextBox from "@/src/components/common/TextBox";
import Editor from "@/src/components/admin/Editor";
import { useState } from "react";
import styled from "styled-components";

import getWord from "@/src/constants/words";
import Button from "@/src/components/common/Button";

import { addProductPost } from "@/api/admin";
import { useRouter } from "next/navigation";
import ThumbnailInput from "@/src/components/write/ThumbnailInput";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export default function Write() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [text, setText] = useState("");
  const router = useRouter();

  const createProductPost = async () => {
    await addProductPost(title, thumbnail, text);
    router.push("/admin/products/list");
  };

  return (
    <Container>
      <TitleWrapper>
        <TextBox
          fontWeight={700}
          fontSize="large"
          placeholder={getWord("Common", "title")}
          onChange={setTitle}
        />
        <TextBox
          fontWeight={500}
          fontSize="medium"
          placeholder={getWord("Common", "subtitle")}
          onChange={setSubtitle}
        />
      </TitleWrapper>
      <ThumbnailInput onChange={setThumbnail} />
      <Editor onChange={setText} />
      <Button
        text={getWord("Common", "register")}
        onClick={createProductPost}
        disabled={title.length === 0 || text.length === 0}
      />
    </Container>
  );
}
