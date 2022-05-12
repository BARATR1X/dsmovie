import github from "../src/assets/github.svg";
import "./Header.style.css";

export const Header = () => {
  return (
    <div>
      <header>
        <nav className="container">
          <h1>DSMovie</h1>
          <div className="dsmovie-contact-container">
            <img src={github} alt="Github"></img>
            <a href="https://github.com/devsuperior/sds-dsmovie/tree/main/episodio1-iniciante">
              /devsuperior
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};
