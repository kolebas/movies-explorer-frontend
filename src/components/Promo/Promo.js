import "./Promo.css";
import NavTab from "../NavTab/NavTab";

const Promo = () => (
  <section className="main__promo">
    <div className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <div className="promo__buttons">
        <NavTab />
      </div>

    </div>

  </section>
)

export default Promo