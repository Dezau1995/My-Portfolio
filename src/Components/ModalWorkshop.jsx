import { useNavigate } from "react-router-dom";
import "./ModalWorkshop.css";

function ModalWorkshop({ closeModalWorkshop }) {
  const navigate = useNavigate();
  const handleModalWorkshop = () => {
    closeModalWorkshop(false);
  };

  return (
    <div>
      <section className="modal-workshop-container">
        <section className="workshop-container">
          <button
            className="button-close-workshop"
            type="button"
            onClick={handleModalWorkshop}
          >
            X
          </button>
          <div className="display-pro-home">
            <section className="section-title-pro-home">
              <h1 className="title-pro-home">
                WELCOME ON MY PROJECTS, COME HAVE A LOOK
              </h1>
            </section>
            <section className="display-modal-btn">
            <section className="section-pro-project-btns">
              <section
                onClick={() => navigate("/pro-project-1")}
                className="section-btn-pro"
              >
                <h2 className="title-project-pro-home">PROJECT 1</h2>
                <p className="title-site-pro">
                  LES RECETTES
                  <br /> WILD
                </p>
              </section>
              <section
                onClick={() => navigate("/pro-project-2")}
                className="section-btn-pro"
              >
                <div>
                  <h2 className="title-project-pro-home">PROJECT 2</h2>
                  <p className="title-site-pro">
                    FILM
                    <br /> FUSION
                  </p>
                </div>
              </section>
            </section>
            <section className="section-workshop-hackathon">
              <section className="section-btn-workshop-hackathon">
                <h2>Workshop</h2>
                <h1 className="title-project-workshop-hackathon">
                  Rick & Morty
                </h1>
              </section>
              <section onClick={() => navigate("/hackathon-1")} className="section-btn-workshop-hackathon">
                <h2>Hackathon</h2>
                <h1 className="title-project-workshop-hackathon">Rigol'App</h1>
              </section>
            </section>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ModalWorkshop;
