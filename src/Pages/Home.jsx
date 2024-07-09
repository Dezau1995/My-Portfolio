import "./Home.css";

function Home() {
  return (
    <main className="home-display">
      <section className="title-name">
        <h1>Aude Sedillo</h1>
      </section>
      <section className="header-job">
        <h1 className="text-decoration">WEB DEVELOPER FULLSTACK</h1>
      </section>
      <section className="description-job">
        <p className="home-description">
          Je recherche une alternance en tant que développeuse front-end,
          back-end ou full-stack.
        </p>
      </section>
    </main>
  );
}

export default Home;
