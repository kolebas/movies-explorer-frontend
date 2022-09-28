import "./Navigation.css";

const Navigation = () => (
  <div className="navigation">
    <ul className="navigation__links">
      <li className="navigation__links-item">Фильмы</li>
      <li className="navigation__links-item">Сохраненые фильмы</li>
    </ul>
    <div>
      <button className="navigation__button navigation__button_register" type="button">Регистрация</button>
      <button className="navigation__button navigation__button_login" type="button">Войти</button>
      <button className="navigation__button navigation__button_account" type="button">Аккаунт</button>
    </div>
  </div>
)

export default Navigation