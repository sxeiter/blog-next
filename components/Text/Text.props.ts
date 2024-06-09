import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

enum TextSize {
    s = "s",
    m = "m",
    l = "l",
}

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: TextSize;
    children: ReactNode;
    className?: string;
}