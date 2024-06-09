import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LikeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    likes: number;
    onLike?: (likes: number) => void;
}