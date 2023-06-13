import NavList from "./NavList/NavList";
import s from "./Navigation.module.css";
import logo from "../../img/Navigation/logo.png";
import add from '../../img/Navigation/plus-order.svg';
import cash from '../../img/Navigation/cash.svg';

function Navigation() {
  return (
    <div className={s.navigation}>
      <div className={s.container}>
        <div className={s.logo}>
          <img src={logo} alt="#" />
        </div>
        <NavList />
        <div className={s.btn_container}>
          <button>
            <p>Добавить заказ</p>
            <img src={add} alt="#" />
          </button>
          <button className={s.cash}>
            <p>Оплата</p>
            <img src={cash} alt="#" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
