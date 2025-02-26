import styles from "./Footer.module.css";

import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p>Meu portfólio particular.</p>
      <p>
        <FaCopyright className={styles.copyright} /> Criador por: <span>Danrlei Vieira,
        2024</span>.
      </p>
    </footer>
  );
}

export default Footer;
