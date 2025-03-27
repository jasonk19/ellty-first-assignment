import Button from "../button";
import Home from "../home";

const ChecklistForm = () => {
  const pages = Array.from({ length: 6 }).map((_, i) => i + 1);

  return (
    <div className="checklist-form">
      <Home label="All pages" />
      <hr
        style={{
          width: "340px",
          border: "0.7px solid #eeeeee",
        }}
      />
      <div className="pages__container">
        {pages.map((page) => (
          <Home label={`Page ${page}`} key={page} />
        ))}
      </div>
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
