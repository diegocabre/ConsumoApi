import MiApi from "./components/MiApi";
import "./App.css";
import portada from "./assets/img/portada.jpg";
import bar from "./assets/img/bar.jpg";
import bar2 from "./assets/img/bar2.jpg";
export default function App() {
  return (
    <>
      <header>
        <img src={portada} alt="" className="portada" />
        <img src={bar} alt="" className="bar" />
        <img src={bar2} alt="" className="bar2" />
      </header>
      <main>
        <div className="card">
          <div className="card-body">
            <MiApi />
          </div>
        </div>
      </main>
      <footer>
        <p>
          Powered by <a href="https://www.thecocktaildb.com/">TheCocktailDB</a>
        </p>
      </footer>
    </>
  );
}
