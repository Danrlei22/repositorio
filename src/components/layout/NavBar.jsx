import "../pages/Sobre.jsx";
import "./Projects.jsx";
import "./SocialMedia.jsx";

import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav>
      <h2 className={styles.nameH2}>Meu Portfólio</h2>
      <ul>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
