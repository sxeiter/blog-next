import { TextProps } from "./Text.props";
import styles from "./Text.module.css";
import cn from "classnames";

export const Text = ({
  children,
  size = "m",
  className,
  ...props
}: TextProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.l]: size == "l",
      })}
    >
      {children}
    </p>
  );
};
