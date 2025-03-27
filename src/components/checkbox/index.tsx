import CheckmarkIcon from "@/assets/icons/checkmark.tsx";

interface CheckboxProps {
  isChecked?: boolean;
  setIsChecked: (value: boolean) => void;
}
const Checkbox = (props: CheckboxProps) => {
  const { isChecked, setIsChecked } = props;

  return (
    <div className="checkbox__container">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        checked={isChecked}
        type="checkbox"
        className="checkbox"
      />
      <div className="checkbox__overlay--active" />
      <CheckmarkIcon className="checkmark" />
    </div>
  );
};

export default Checkbox;
