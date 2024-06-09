import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

enum ButtonAppearance {
    primary = "primary",
    ghost = "ghost",
}

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance: ButtonAppearance;
    arrow?: "right" | "none";
}