import Button from "./components/button";
import Checkbox from "./components/checkbox";
import ChecklistForm from "./components/checklist-form";
import FormCheck from "./components/home";

const App = () => {
  return (
    <div>
      <h1>First Test Assignment</h1>
      <h3>Author: Jason Kanggara</h3>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div>
            <h2>Components</h2>
            <div>
              <h4>Button Component</h4>
              <Button label="Done" />
            </div>
            <div>
              <h4>Checkbox Component</h4>
              <Checkbox setIsChecked={() => {}} />
            </div>
            <div>
              <h4>Form Component</h4>
              <FormCheck label="All pages" />
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div>
            <h2>Combined Components</h2>
            <ChecklistForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
