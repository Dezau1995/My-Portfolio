import Footer from "../Components/Footer";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact-display">
      <section className="header-contact">
        <h1 className="contact-text-decoration">
          IF YOU’RE INTERESTED BY
          <br /> MY PROFILE,
          <br />
          GET IN TOUCH !
        </h1>
      </section>
      <section className="section-contact-info">
        <p className="contact-info">📍Paris, Ile-de-France, France</p>
        <p className="contact-info">📧  aude.sedillo@gmail.com</p>
        <p className="contact-info"><FaLinkedin /> <Link
            className="linkedin-btn"
            to="https://www.linkedin.com/in/aude-sedillo-abb68b2b9/"
            target="_blank"
          >
            LinkedIn
          </Link></p>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
