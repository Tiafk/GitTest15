import NewCalls from "./Progress/NewCalls";
import s from './Calls.module.css';
import CallQuality from "./Progress/CallQuality";
import Conversion from "./Progress/Conversion";

function Calls() {
  return (
    <div className={s.calls}>
      <NewCalls title="Новые звонки" score="20 из 30"/>
      <CallQuality title="Качество разговора" score="40%"/>
      <Conversion title="Конверсия в заказ" score="67%"/>
    </div>
  );
}

export default Calls;
