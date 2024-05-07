import "./PersoProject.css";
import { useNavigate } from "react-router-dom";

function PersoProject() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="wip-header">
        <h1 className="">Work In Progress ...</h1>
      </div>
      <div className="display-btn-close">
        <p
          className="btn-close"
          onClick={() => {
            navigate("/");
          }}
        >
          CLOSE
        </p>
      </div>
    </div>
  );
}

export default PersoProject;
