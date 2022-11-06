import Spinner from "../Spinner/Spinner";
import "./Button.scss";

interface ButtonProps {
  name: string;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClickFunction?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  isLoading,
  name,
  disabled,
  onClickFunction,
  type,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClickFunction && onClickFunction();
  };
  return (
    <button
      type={type}
      className={isLoading ? "button button__loading" : "button"}
      onClick={(event) => handleClick(event)}
      disabled={disabled}
    >
      {isLoading ? <Spinner /> : name}
    </button>
  );
};

export default Button;
