import "./Spinner.scss";
interface SpinnerProps {}

const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <div className="spinner__wrapper">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
