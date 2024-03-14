import { MdAddCircle } from "react-icons/md";
import { ChangeEvent, useState } from "react";
import getWord from "@/src/constants/words";
import Image from "next/image";
import styled, { css } from "styled-components";
import { fadeIn, fadeOut } from "@/src/constants/animations";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ImageInput = styled.input`
  display: none;
  width: 80%;
  height: 80%;
`;

const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid var(--color-light-gray);
  border-radius: 0.5rem;
`;

const SelectThumbnail = styled.label<{ show: boolean }>`
  position: absolute;
  display: ${(props) => (props.show ? css`block` : css`none`)};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--color-light-gray);
  cursor: pointer;
  opacity: 0.5;
`;

const Preview = styled(Image)``;

const ImageInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px dashed var(--color-light-gray);
  border-radius: 0.5rem;
  gap: 0.75rem;
`;

interface ThumbnailInputProps {
  onChange: Function;
  showPreviewContainer?: Boolean;
}

export default function ThumbnailInput(props: ThumbnailInputProps) {
  const { onChange, showPreviewContainer = true } = props;
  const [thumbnail, setThumbnail] = useState<string | ArrayBuffer | null>();
  const [showSelectThumbnail, setShowSelectThumbnail] =
    useState<boolean>(false);

  const onThumbnailChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setThumbnail(reader.result);
        onChange(file);
        resolve(file);
      };
    });
  };

  return (
    <Container
      onMouseEnter={() => setShowSelectThumbnail(true)}
      onMouseLeave={() => setShowSelectThumbnail(false)}
    >
      <ImageInput
        type="file"
        id="thumbnail"
        accept="image/*"
        onChange={onThumbnailChanged}
      />
      <ImageInputContainer>
        <MdAddCircle size={30} />
        <p>{getWord("Admin", "thumbnail")}</p>
        <p>{getWord("Admin", "warning")}</p>
        {thumbnail && showPreviewContainer && (
          <PreviewContainer>
            <Preview src={thumbnail as string} alt="thumbnail" priority fill />
            <ImageInputContainer></ImageInputContainer>
          </PreviewContainer>
        )}
      </ImageInputContainer>
      <SelectThumbnail show={showSelectThumbnail} htmlFor="thumbnail" />
    </Container>
  );
}
