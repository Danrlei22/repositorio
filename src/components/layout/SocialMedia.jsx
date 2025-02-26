import styles from "./SocialMedia.module.css";

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function SocialMedia() {
  return (
    <section className={styles.sociaisMedia} id="contato">
      <h2>Meus contatos</h2>

      <div className={styles.icons}>
        <ul className={styles.listIcons}>
          <li>
            <a
              href="https://github.com/Danrlei22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={styles.iconGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/danrlei-vieira-85b335231/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.iconLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/danrlei.vieira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={styles.iconInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5545999638658"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={styles.iconWhatssapp} />
            </a>
          </li>
        </ul>

        <div className={styles.containerEmail}>
          <MdEmail className={styles.iconEmail} />
          <p className={styles.email}>Email:danrlei_vieira@hotmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
