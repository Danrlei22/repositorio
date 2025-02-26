import styles from "./Welcome.module.css";

import perfilUtpr from "../../assets/image/perfilUtfpr.jpeg";

import Sobre from "../pages/Sobre";

function Welcome() {
  return (
    <section className={styles.welcome}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={perfilUtpr} alt="Imagem de terno de perfil" />
        </div>

        <div className={styles.right}>
          <Sobre />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
