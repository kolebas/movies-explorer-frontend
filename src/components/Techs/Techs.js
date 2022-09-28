import "./Techs.css";

const Techs = () => (
  <section className="main__technology">
      <div className="main__section-title">
        <h2 className="main__section-title-text">Технологии</h2>
      </div>
      <h3 className="technology__title">7 технологий</h3>
      <h4 className="technology__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h4>
      <ul className="technology__buttons">
        <li><button className="technology__buttons-item">HTML</button></li>
        <li><button className="technology__buttons-item">CSS</button></li>
        <li><button className="technology__buttons-item">JS</button></li>
        <li><button className="technology__buttons-item">React</button></li>
        <li><button className="technology__buttons-item">Git</button></li>
        <li><button className="technology__buttons-item">Express.js</button></li>        
        <li><button className="technology__buttons-item">mongoDB</button></li>
      </ul>
    </section>
)

export default Techs