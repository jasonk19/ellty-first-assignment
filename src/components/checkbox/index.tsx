import styles from "./styles.module.css";
import CheckmarkIcon from "@/assets/icons/checkmark.tsx";

interface CheckboxProps {
  isHovered?: boolean;
  isChecked?: boolean;
  setIsChecked: (value: boolean) => void;
}
const Checkbox = (props: CheckboxProps) => {
  const { isHovered, isChecked, setIsChecked } = props;

  const getChecboxBackgroundColor = () => {
    if (isChecked && isHovered) {
      return "#2469f6";
    }

    if (isChecked && !isHovered) {
      return "#5087f8";
    }

    return "#ffffff";
  };

  return (
    <div className={styles.checkbox__container}>
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        checked={isChecked}
        type="checkbox"
        className={
          isHovered || isChecked ? styles.checkbox__static : styles.checkbox
        }
        style={
          isHovered || isChecked
            ? {
                borderStyle: isChecked ? "none" : undefined,
                borderColor: isHovered ? "#bdbdbd" : "#cdcdcd",
                backgroundColor: getChecboxBackgroundColor(),
              }
            : undefined
        }
      />
      <CheckmarkIcon
        className={styles.checkmark}
        style={
          isHovered || isChecked
            ? {
                display: isHovered || isChecked ? "block" : undefined,
                color: isChecked ? "#ffffff" : undefined,
              }
            : undefined
        }
      />
    </div>
  );
};

export default Checkbox;
