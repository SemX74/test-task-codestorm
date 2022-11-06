import { BsCheckLg } from "react-icons/bs";
import "./Checkbox.scss";
interface CheckboxProps {
  isChecked: boolean;
  name?: string;
  style?: React.CSSProperties;
  onClickFunction?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  onClickFunction,
  name,
  style,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    onClickFunction && onClickFunction();
  };
  return (
    <label style={style} className="checkbox-wrapper">
      <div className="checkbox" onClick={(event) => handleClick(event)}>
        {!isChecked ? null : <BsCheckLg />}
      </div>
      <span className="checkbox-label">{name && name}</span>
    </label>
  );
};

export default Checkbox;
