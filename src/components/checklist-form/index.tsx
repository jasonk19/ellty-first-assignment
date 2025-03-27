import Button from "../button";
import Home from "../home";

const ChecklistForm = () => {
  console.log();
  return (
    <div className="checklist-form">
      <Home label="All pages" />
      <hr
        style={{
          width: "340px",
          border: "0.7px solid #eeeeee",
        }}
      />
      <Home label="Page 1" />
      <Home label="Page 2" />
      <Home label="Page 3" />
      <Home label="Page 4" />
      <hr
        style={{
          width: "340px",
          border: "0.7px solid #eeeeee",
        }}
      />
      <Button label="Done" />
    </div>
  );
};

export default ChecklistForm;
