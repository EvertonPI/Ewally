import React, { ReactNode } from "react";
import { ButtonModule } from "./styles";

interface button {
  children: ReactNode;
  onClick?: () => void;
  backColor?: string | any;
  color?: string | any;
}

export default function Button({
  children,
  backColor,
  color,
  onClick,
}: button) {
  return (
    <ButtonModule backColor={backColor} onClick={onClick} color={color}>
      {children}
    </ButtonModule>
  );
}
