import { Size } from "../types/size.type";
import { ButtonProps, ButtonShape } from "./button.types";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-large",
};

const shapeClasses:Record<ButtonShape , string>={
    wide:"btn-wide",
    full:"btn-block",
    square:"btn-square",
    default:""
}
export const Button: React.FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDisabled = false,
  isOutLine = false,
  shape = "default",
  isLoading = false,
  loadingType = "spinner",
  loadingText = "در حال ارسال",
  type = "button",
  isLink = false,
  children,
  className,
  animatedIcon = false,
  ...reset
}: ButtonProps) => {
  const classess = classNames(
    "btn",
    className,
    { "btn-outline": isOutLine },
    { "btn-link": isLink },
    { "animated-icon": animatedIcon },
    { "pointer-events-none opacity-80": isLoading },
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    {[`${shapeClasses[shape]}`]:shape}
  );

  return (
    <button type={type} disabled={isDisabled} {...reset} className={classess}>
      {isLoading ? loadingText : children}
    </button>
  );
};
