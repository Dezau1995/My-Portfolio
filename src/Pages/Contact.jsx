import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <main className="contact-display">
      <div className="section-header-contact">
        <section className="header-contact">
          <h1 className="contact-text-decoration">
            Intéressé par
            <br /> mon profil ?
            <br />
            Contactez-moi !
          </h1>
        </section>
      </div>
      <section className="section-contact-info">
        <p>📍Paris, Ile-de-France, France</p>
        <p className="contact-info">📧 aude.sedillo@gmail.com</p>
        <button
          className="btn-send-email"
          onClick={() => (window.location = `mailto:aude.sedillo@gmail.com`)}
        >
          Contactez moi !
        </button>
        <p>
          <FaLinkedin />{" "}
          <Link
            className="linkedin-link"
            to="https://www.linkedin.com/in/aude-sedillo-abb68b2b9/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </p>
        <p>
          <FaGithub />{" "}
          <Link
            to="https://github.com/Dezau1995"
            className="github-link"
            target="_blank"
          >
            GitHub
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Contact;
