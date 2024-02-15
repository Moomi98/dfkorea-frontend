"use client";

import styled, { css } from "styled-components";
import { MdClear } from "react-icons/md";
import { ChangeEvent, useState } from "react";

type TFontSize = "small" | "medium" | "large" | "xlarge";

type TextBoxProps = {
  width?: string;
  showClearButton?: boolean;
  value?: string;
  onChange?: Function;
  placeholder?: string;
  fontWeight?: number;
  limit?: number;
  fontSize?: TFontSize;
};

const fontSizeMapper = {
  small: "0.75rem",
  medium: "1rem",
  large: "2rem",
  xlarge: "3rem",
};

const Container = styled.div<{ $width: string }>`
  width: ${(props) => props.$width ?? css`"100%"`};
  min-height: 2rem;
  border-radius: 0.25rem;
  border: 1px solid black;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input<{
  $fontWeight: number;
  $fontSize: TFontSize;
}>`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-weight: ${(props) => props.$fontWeight ?? 500};
  font-size: ${(props) =>
    props.$fontSize ? fontSizeMapper[props.$fontSize] : "1rem"};
`;

const ClearButton = styled(MdClear)`
  cursor: pointer;
`;

export default function TextBox(props: TextBoxProps) {
  const {
    width = "100%",
    showClearButton = true,
    value = "",
    placeholder = "",
    fontWeight = 500,
    limit,
    fontSize = "medium",
  } = props;

  const [currentValue, setCurrentValue] = useState(value);

  const onValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (limit && value.length > limit) return;

    setCurrentValue(event.target.value);
    props.onChange && props.onChange(event.target.value);
  };

  const clearText = () => {
    setCurrentValue("");
    props.onChange && props.onChange("");
  };

  return (
    <Container $width={width}>
      <Input
        value={currentValue}
        onChange={onValueChanged}
        placeholder={placeholder}
        $fontWeight={fontWeight}
        $fontSize={fontSize}
      />
      {showClearButton && currentValue.length > 0 && (
        <ClearButton size={"1.5rem"} onClick={clearText} />
      )}
    </Container>
  );
}
