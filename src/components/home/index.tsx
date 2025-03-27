import Checkbox from "@/components/checkbox";
import styles from "./styles.module.css";
import { useState } from "react";

interface HomeProps {
  label: string;
}
const Home = (props: HomeProps) => {
  const { label } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={styles.home}
      onClick={() => setIsChecked(!isChecked)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>{label}</p>
      <Checkbox
        isHovered={isHovered}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
    </div>
  );
};

export default Home;
