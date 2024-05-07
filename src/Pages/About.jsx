import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div>
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

export default About;
