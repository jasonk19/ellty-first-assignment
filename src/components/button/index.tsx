interface ButtonProps {
  label: string;
}
const Button = (props: ButtonProps) => {
  const { label } = props;

  return <button className="button">{label}</button>;
};

export default Button;
