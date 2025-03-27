import Checkbox from "@/components/checkbox";
import { useState } from "react";

interface HomeProps {
  label: string;
}
const Home = (props: HomeProps) => {
  const { label } = props;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="home" onClick={() => setIsChecked(!isChecked)}>
      <p>{label}</p>
      <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
    </div>
  );
};

export default Home;
