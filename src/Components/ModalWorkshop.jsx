import { useNavigate } from "react-router-dom";
import "./ModalWorkshop.css";

function ModalWorkshop({ closeModalWorkshop }) {
  const navigate = useNavigate();
  const handleModalWorkshop = (navigateRoute) => {
    closeModalWorkshop(false);
    navigate(navigateRoute);
    document.body.classList.remove("active");
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
                  onClick={() => handleModalWorkshop("/pro-project-2")}
                  className="section-btn-pro"
                >
                  <div>
                    <h2 className="title-project-pro-home">PROJECT</h2>
                    <p className="title-site-pro">
                      FILM
                      <br /> FUSION
                    </p>
                  </div>
                </section>
                <section
                  onClick={() => handleModalWorkshop("/pro-project-1")}
                  className="section-btn-pro"
                >
                  <h2 className="title-project-pro-home">PROJECT</h2>
                  <p className="title-site-pro">
                    LES RECETTES
                    <br /> WILD
                  </p>
                </section>
              </section>
              <section className="section-workshop-hackathon">
                <section
                  onClick={() => handleModalWorkshop("/hackathon-1")}
                  className="section-btn-workshop-hackathon"
                >
                  <h2>HACKATHON</h2>
                  <h1 className="title-project-workshop-hackathon">
                    RIGOL'APP
                  </h1>
                </section>
                <section
                  onClick={() => handleModalWorkshop("/workshop-1")}
                  className="section-btn-workshop-hackathon"
                >
                  <h2>PROJECT</h2>
                  <h1 className="title-project-workshop-hackathon">
                    RICK & MORTY
                  </h1>
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
