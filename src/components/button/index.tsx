import styles from "./styles.module.css";

interface ButtonProps {
  label: string;
}
const Button = (props: ButtonProps) => {
  const { label } = props;

  return <button className={styles.button}>{label}</button>;
};

export default Button;
