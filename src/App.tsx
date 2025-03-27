import Button from "./components/button";
import Checkbox from "./components/checkbox";
import ChecklistForm from "./components/checklist-form";
import FormCheck from "./components/home";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <Button label="Done" />
        <Checkbox setIsChecked={() => {}} />
        <FormCheck label="All pages" />
        <ChecklistForm />
      </div>
    </div>
  );
};

export default App;
