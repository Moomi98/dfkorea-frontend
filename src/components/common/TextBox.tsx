"use client";

import styled from "styled-components";
import { MdClear } from "react-icons/md";
import { ChangeEvent, useState } from "react";

const Container = styled.div<{ width: string }>`
  width: 100%;
  height: 2rem;
  border-radius: 0.25rem;
  border: 1px solid black;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;

const ClearButton = styled(MdClear)`
  cursor: pointer;
`;

type TextBoxProps = {
  width?: string;
  showClearButton?: boolean;
  value?: string;
  onChange?: Function;
};

export default function TextBox(props: TextBoxProps) {
  const { width = "100%", showClearButton = true, value = "" } = props;

  const [currentValue, setCurrentValue] = useState(value);

  const setText = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
    props.onChange && props.onChange(event.target.value);
  };

  return (
    <Container width={width}>
      <Input value={currentValue} onChange={setText} />
      {showClearButton && currentValue.length > 0 && (
        <ClearButton size={"1.5rem"} onClick={() => setCurrentValue("")} />
      )}
    </Container>
  );
}
