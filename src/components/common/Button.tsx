import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import {
  MdCreate,
  MdOutlineDelete,
  MdCancel,
  MdNavigateNext,
} from "react-icons/md";
import styled, { css } from "styled-components";

const Container = styled.button<{
  $width: string;
  $hasIcon: boolean;
  $primary: boolean;
  $disabled: boolean;
}>`
  border-radius: 0.5rem;
  padding: ${(props) =>
    props.$hasIcon ? "1rem 1rem 1rem 1.5rem" : "1rem 1.5rem"};
  width: ${(props) => props.$width};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.$disabled
      ? css`var(--color-disabled)`
      : props.$primary
      ? css`var(--color-primary)`
      : css`white`};
  color: ${(props) => (props.$primary ? "white" : "black")};
`;

const ButtonText = styled.span<{ $bold: boolean }>`
  font-weight: ${(props) => (props.$bold ? "bold" : "500")};
  font-size: ${(props) => (props.$bold ? "1.25rem" : "1rem")};
`;

type ButtonPreset = "primary" | "normal";
type IconPreset = "add" | "regist" | "delete" | "cancel" | "move";
interface ButtonProps {
  text: string;
  width?: string;
  value?: string | number | boolean;
  preset?: ButtonPreset;
  icon?: IconPreset;
  onClick?: Function;
  disabled?: boolean;
  bold?: boolean;
}

export default function Button(props: ButtonProps) {
  const {
    text,
    width = "fit-content",
    value,
    preset = "primary",
    icon,
    onClick,
    disabled = false,
    bold = false,
  } = props;

  const iconSize = 20;

  const iconPreset = {
    add: <BiPlus size={iconSize} />,
    regist: <MdCreate size={iconSize} />,
    delete: <MdOutlineDelete size={iconSize} />,
    cancel: <MdCancel size={iconSize} />,
    move: <MdNavigateNext size={iconSize} />,
  };

  return (
    <Container
      onClick={() => onClick && onClick(value)}
      $width={width}
      $primary={preset === "primary" ?? false}
      $hasIcon={!!icon}
      $disabled={disabled}
    >
      <ButtonText $bold={bold ?? false}>{text}</ButtonText>
      {icon && iconPreset[icon]}
    </Container>
  );
}
