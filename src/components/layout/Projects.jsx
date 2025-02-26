import styles from "./Projects.module.css";

import custos from "../../assets/image/projetos/custos.PNG";
import tarefa from "../../assets/image/projetos/tarefa.PNG";
import cursoFeito from "../../assets/image/projetos/cursoFeito.PNG";
import frontEnd from "../../assets/image/projetos/frontEnd.PNG";
import pizzariaZ from "../../assets/image/projetos/pizzariaZ.PNG";
import landingPage from "../../assets/image/projetos/landingPage.PNG";
import landingPage2 from "../../assets/image/projetos/landingPage2.PNG";
import imgDBZ from "../../assets/image/projetos/imgDBZ.PNG";
import imgCineMania from "../../assets/image/projetos/imgCineMania.PNG";

function Projects() {
  return (
    <section id="projetos">
      <h2 className={styles.title}>Meus Projetos</h2>

      <p className={styles.descTitle}>
        Abaixo estão os projetos que desenvolvi e as tecnologias utilizadas
        durante o processo. Se quiser saber mais sobre eles, é só clicar no
        projeto, e você será direcionado para o GitHub. Lá você poderá ver o
        código fonte e o link do projeto em execução.
      </p>

      <div className={styles.containerProjects}>
        <div className={styles.project}>
          <a
            className={styles.linkProject}
            href="https://github.com/Danrlei22/cinemania"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.imgProject}
              src={imgCineMania}
              alt="Projeto descrição de filmes"
            />
          </a>
          <div className={styles.desc}>
            <h2 className={styles.titleProject}>CineMania</h2>
            <p className={styles.descProject}>
              Vite, React, JavaScript, CSS3 e HTML5
            </p>
          </div>
        </div>

        <div className={styles.project}>
          <a
            className={styles.linkProject}
            href="https://github.com/Danrlei22/api-dragon-ball"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.imgProject}
              src={imgDBZ}
              alt="Projeto de custo de uma aplicação"
            />
          </a>
          <div className={styles.desc}>
            <h2 className={styles.titleProject}>API Dragon Ball Z</h2>
            <p className={styles.descProject}>
              Vite, React, JavaScript, CSS3 e HTML5
            </p>
          </div>
        </div>

        <div className={styles.project}>
          <a
            className={styles.linkProject}
            href="https://github.com/Danrlei22/Costs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.imgProject}
              src={custos}
              alt="Projeto de custo de uma aplicação"
            />
          </a>
          <div className={styles.desc}>
            <h2 className={styles.titleProject}>Custos</h2>
            <p className={styles.descProject}>
              React, JavaScript, CSS3 e HTML5
            </p>
          </div>
        </div>

        <div className={styles.project}>
          <a
            className={styles.linkProject}
            href="https://github.com/Danrlei22/Tarefas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.imgProject}
              src={tarefa}
              alt="Projeto de tarefas"
            />
          </a>
          <div className={styles.desc}>
            <h2 className={styles.titleProject}>Tarefas</h2>
            <p className={styles.descProject}>
              React, JavaScript, CSS3 e HTML5
            </p>
          </div>
        </div>

        <div className={styles.project}>
          <a
            className={styles.linkProject}
            href="https://github.com/Danrlei22/Pizzaria-Z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.imgProject}
              src={pizzariaZ}
              alt="Projeto de uma pizzaria"
            />
          </a>
          <div className={styles.desc}>
            <h2 className={styles.titleProject}>Pizzaria Z</h2>
            <p className={styles.descProject}>JavaScript, CSS3 e HTML5</p>
          </div>
        </div>

        <div className={styles.project}>
          <a
            className={styles.linkProject}
            href="https://github.com/Danrlei22/Prot-tipo-curso-front-end"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.imgProject}
              src={cursoFeito}
              alt="Projeto feito apartir de um curso"
            />
          </a>
          <div className={styles.desc}>
            <h2 className={styles.titleProject}>
              Projeto feito apartir de um curso
            </h2>
            <p className={styles.descProject}>JavaScript, CSS3 e HTML5</p>
          </div>
        </div>

        <div className={styles.project}>
          <a
            className={styles.linkProject}
            href="https://github.com/Danrlei22/Informativo-front-end"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.imgProject} src={frontEnd} alt="*****" />
          </a>
          <div className={styles.desc}>
            <h2 className={styles.titleProject}>
              Material informativo front-end
            </h2>
            <p className={styles.descProject}>JavaScript, CSS3 e HTML5</p>
          </div>
        </div>

        <div className={styles.project}>
          <a
            href="https://github.com/Danrlei22/Landing-Page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.imgProject}
              src={landingPage}
              alt="Landing Page"
            />
          </a>
          <div className={styles.desc}>
            <h2 className={styles.titleProject}>Landing Page</h2>
            <p className={styles.descProject}>JavaScript, CSS3 e HTML5</p>
          </div>
        </div>

        <div className={styles.project}>
          <a
            href="https://github.com/Danrlei22/Landing-Page2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.imgProject}
              src={landingPage2}
              alt="Landing Page 2"
            />
          </a>
          <div className={styles.desc}>
            <h2 className={styles.titleProject}>Landing Page 2</h2>
            <p className={styles.descProject}>JavaScript, CSS3 e HTML5</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
