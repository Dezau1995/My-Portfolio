import Footer from "../Components/Footer";
import "./Home.css";

function Home() {

  return (
    <main className="home-display">
      <section className="title-name">
        <h1>AUDE SEDILLO</h1>
      </section>
      <section className="header-job">
        <h1 className="text-decoration">WEB DEVELOPER FULLSTACK</h1>
      </section>
      <section className="description-job">
        <p>
          Looking for a work-study program as a front-end, back-end or
          full-stack developer
        </p>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
