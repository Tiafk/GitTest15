import s from "./Header.module.css";
import Calls from "./Calls/Calls";
import Profile from "./Profile/Profile";

function Header() {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.wrapper_calls}>
          <div className={s.date}>Среда, 13 окт</div>
          <Calls />
        </div>
        <Profile name='ИП Сидорова Александра Михайловна'/>
      </div>
    </div>
  );
}

export default Header;
