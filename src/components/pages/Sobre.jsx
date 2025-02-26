import styles from "./Sobre.module.css";

function Sobre() {
  return (
    <div className={styles.skills} id="sobre">
      <h1 className={styles.skillsH1}>Olá, eu sou o Danrlei</h1>
      <h2 className={styles.skillsH2}>um desenvolvedor web</h2>

      <p className={styles.descricao}>
        Ao longo da minha jornada acadêmica, desenvolvi uma paixão pela
        programação e pelo desenvolvimento de software. Na reta final do curso,
        decidi que quero seguir carreira na área de front-end, a princípio. Além
        disso, minha experiência na disciplina de dispositivos móveis,
        utilizando Flutter, me deixou bastante fascinado pela programação.
      </p>

      <hr />

      <h3 className={styles.skillsH3}>
        <span>Tenho conhecimento em:</span>
      </h3>
      <p>
        <span>Banco de dados:</span> MySQL, SQL, Oracle.
      </p>
      <p>
        <span>Controle de versão:</span> Git, GitHub.
      </p>
      <p>
        <span>Engenharia de software:</span> princípios e boas práticas.
      </p>
      <p>
        <span>Linguagens de programação</span> (em ordem de uso): HTML, CSS,
        React, JavaScript, Node.js, C, C#, Python, C++ e PHP.
      </p>

      <hr />

      <h3 className={styles.skillsH3}>
        <span>Skills:</span>
      </h3>
      <div>
        <ul>
          <li>Forte vontade de aprender e enfrentar novos desafios.</li>
          <li>Iniciativa, proatividade e bom relacionamento interpessoal.</li>
          <li>
            Espírito de evolução constante, responsabilidade e autonomia nas
            atividades.
          </li>
          <li>
            Capacidade de se adaptar rapidamente a novas tecnologias e desafios.
          </li>
          <li>
            Habilidade para trabalhar em equipe, colaborando com
            desenvolvedores, designers e stakeholders.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sobre;
