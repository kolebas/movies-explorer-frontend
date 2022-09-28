import "./AboutMe.css";

const AboutMe = () => (
  <section className="main__aboutme">
    <div className="main__section-title">
      <h2 className="main__section-title-text">Студент</h2>
    </div>
    <div className="aboutme__info">
      <div className="aboutme__description">
        <h2 className="aboutme__name">Николай</h2>
        <h3 className="aboutme__position">Фронтенд-разработчик, 36 лет</h3>
        <p className="aboutme__text">Я родился и живу в Ростове-на-Дону, закончил факультет высокоэффективных процессов обработки ДГТУ. У меня есть жена
          и две красивые, веселые дочурки. Я люблю слушать музыку, а ещё увлекаюсь автомобильным тюнингом. Недавно начал кодить. С 2017 года работаю в компании АО Агрохолдинг «СТЕПЬ». </p>
        <div className="aboutme__links">
          <a className="aboutme__link-text" href="https://github.com/kolebas" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
      <div className="aboutme__photo"></div>
    </div>
    <div className="aboutme__portfolio">
      <p className="aboutme__portfolio-title">Портфолио</p>
      <ul className="aboutme__portfolio-list">
        <li className="aboutme__portfolio-item">Статичный сайт
          <a className="aboutme__portfolio-item-icon" href="https://github.com/kolebas" target="_blank" rel="noreferrer"></a>
        </li>
        <li className="aboutme__portfolio-item">Адаптивный сайт
          <a className="aboutme__portfolio-item-icon" href="https://github.com/kolebas" target="_blank" rel="noreferrer"></a>
        </li>
        <li className="aboutme__portfolio-item">Одностраничное приложение
          <a className="aboutme__portfolio-item-icon" href="https://github.com/kolebas" target="_blank" rel="noreferrer"></a>
        </li>
      </ul>
    </div>
  </section>
)

export default AboutMe