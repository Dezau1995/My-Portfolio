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
    <>
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
                Bienvenue sur mes projets, venez les découvrir.
              </h1>
            </section>
            <section className="display-modal-btn">
              <section className="section-pro-project-btns">
                <section
                  onClick={() => handleModalWorkshop("/pro-project-2")}
                  className="section-btn-pro"
                >
                  <div>
                    <h2 className="title-project-pro-home">Projet</h2>
                    <p className="title-site-pro">
                      Film
                      <br /> Fusion
                    </p>
                  </div>
                </section>
                <section
                  onClick={() => handleModalWorkshop("/pro-project-1")}
                  className="section-btn-pro"
                >
                  <h2 className="title-project-pro-home">Projet</h2>
                  <p className="title-site-pro">
                    Les Recettes
                    <br /> Wild
                  </p>
                </section>
              </section>
              <section className="section-workshop-hackathon">
                <section
                  onClick={() => handleModalWorkshop("/hackathon-1")}
                  className="section-btn-workshop-hackathon"
                >
                  <h2 className="title-project-pro-home">Hackathon</h2>
                  <p className="title-project-workshop-hackathon">
                    Rigol'App
                  </p>
                </section>
                <section
                  onClick={() => handleModalWorkshop("/workshop-1")}
                  className="section-btn-workshop-hackathon"
                >
                  <h2 className="title-project-pro-home">Projet</h2>
                  <p className="title-project-workshop-hackathon">
                    Rick & Morty
                  </p>
                </section>
              </section>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

export default ModalWorkshop;
