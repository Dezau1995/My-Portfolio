// import ProProject1 from "../Components/ProProject1";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

function ProProjectHome() {
const navigate = useNavigate();

    return (
        <div>
            <section>
            <h1>WELCOME ON MY PROJECT, LET'S HAVE A LOOK</h1>
            </section>
            <div>
                <button onClick={() => navigate("/pro-project-1")}>Project 1</button>
                <button onClick={() => navigate("/pro-project-1")}>Project 2</button>
            </div>
            <Footer />
        </div>
    );
}

export default ProProjectHome;