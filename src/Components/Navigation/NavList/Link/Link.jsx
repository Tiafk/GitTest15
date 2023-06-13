import { NavLink } from 'react-router-dom';
import s from '../.././Navigation.module.css';

function Link(props) {
  return (
    <NavLink to={props.link} className={s.nav_link}>
      <img src={props.icon} alt="#" />
      <p>{props.text}</p>
    </NavLink>
  );
}

export default Link;