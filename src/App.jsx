import MiApi from "./components/MiApi";
import "./App.css";
import portada from "./assets/img/portada.jpg";
import bar from "./assets/img/bar.jpg";
import bar2 from "./assets/img/bar2.jpg";
import Landing from "./components/Landing";
export default function App() {
  return (
    <>
      <Landing />
      <section id="section" className="section">
        <header className="header">
          <img src={portada} alt="" className="portada" />
          <img src={bar} alt="" className="bar" />
          <img src={bar2} alt="" className="bar2" />
        </header>
        <main>
          <MiApi />
        </main>
        <footer>
          <p>
            Powered by{" "}
            <a href="https://www.thecocktaildb.com/">TheCocktailDB</a>
          </p>
        </footer>
      </section>
    </>
  );
}
