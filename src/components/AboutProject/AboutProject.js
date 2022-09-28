import "./AboutProject.css";

const AboutProject = () => (
  <section className="main__about">
    <div className="main__section-title">
      <h2 className="main__section-title-text">О проекте</h2>
    </div>
    <div className="about__body">
      <div className="body__section-left">
        <h3 className="body__section-title">Дипломный проект включал 5 этапов</h3>
        <p className="body__section-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>
      <div className="body__section-right">
        <h3 className="body__section-title">На выполнение диплома ушло 5 недель</h3>
        <p className="body__section-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="body__section-bottom">
        <div className="body__section-bottom_green">
          <p className="body__section-bottom-text">1 неделя</p>
          <p className="body__section-bottom-subtitle">Back-end</p>
        </div>
        <div className="body__section-bottom_grey">
          <p className="body__section-bottom-text">4 недели</p>
          <p className="body__section-bottom-subtitle">Back-end</p>
        </div>
      </div>
    </div>
  </section>
)

export default AboutProject