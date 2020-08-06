import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/19716641?s=460&u=63e09d503eb6fbcb55a091b4c514b7fdc87a80cd&v=4"
          alt="Maikel Neris"
        />
        <div>
          <strong>Maikel Neris</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsun dolor et sumi aondeai kapa namur
        <br />
        <br />
        Lorem ipsun dolor et sumi aondeai kapa namur
      </p>

      <footer>
        <p>
          Preço/hora <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Contato" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
