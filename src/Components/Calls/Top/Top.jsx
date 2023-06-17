import c from "../Top/Top.module.css";
import btn from "../../../img/Calls/balance.svg";
import { useState } from "react";

function Top() {
  const [calendar] = useState({
    list: [
      { name: "3 дня", tag: "day" },
      { name: "Неделя", tag: "week" },
      { name: "Месяц", tag: "month" },
      { name: "Год", tag: "year" },
    ],
  });

  const arr = calendar.list;

  // function open(e) {
  //   let calendar = document.querySelectorAll(".Top_calendar__0CQI6");

  //   calendar.forEach((item) => {
  //     item.classList.remove("active");
  //     if (e.target.closest(".Top_calendar__0CQI6") === item) {
  //       item.classList.add("active");
  //       if (e.target.closest(".Top_data_item__xbcUO")) {
  //         item.classList.remove("active");
  //       }
  //     }
  //   });
  // }

  return (
    <div className={c.top}>
      <div className={c.balance}>
        <p>Баланс:</p>
        <p className={c.money}>272 ₽</p>
        <button className={c.btn}>
          <img src={btn} alt="#" />
        </button>
      </div>
      <div className={c.date}>
        <div className={c.arrow}>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_12501_409)">
              <path d="M6.175 15.825L2.35833 12L6.175 8.175L5 7L0 12L5 17L6.175 15.825Z" fill="#ADBFDF" />
            </g>
            <defs>
              <clipPath id="clip0_12501_409">
                <rect width="16" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div 
        // onClick={open} 
        className={c.calendar}
        >
          <div className={c.container}>
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V5.72727H14.4V16.3636Z" fill="#ADBFDF" />
            </svg>
            <p tag={calendar.list[0].tag}>{calendar.list[0].name}</p>
          </div>
          <ul className="data_list">
            {arr.map((item, ye) => (
              <li className={c.data_item} tag={item.tag} key={ye}>
                {item.name}
              </li>
            ))}
            <li className={c.data_calendar}>
              <p className={c.name}>Указать даты</p>
              <div className={c.time}>
                <input type="date"/>
                {/* <span>-</span>
                <input type="date"/> */}
              </div>
            </li>
          </ul>
        </div>
        <div className={c.arrow}>
          <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_12501_415)">
              <path d="M9.58984 15.825L13.4065 12L9.58984 8.175L10.7648 7L15.7648 12L10.7648 17L9.58984 15.825Z" fill="#ADBFDF" />
            </g>
            <defs>
              <clipPath id="clip0_12501_415">
                <rect width="17" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Top;
