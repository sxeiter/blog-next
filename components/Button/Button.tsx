import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "../../public/arrow.svg";

export const Button = ({
  appearance,
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={
        styles.button +
        (appearance === "primary" ? ` ${styles.primary}` : "") +
        (appearance === "ghost" ? ` ${styles.ghost}` : "")
      }
      {...props}
    >
      {children}
      {arrow != "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.right]: arrow == "right",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
