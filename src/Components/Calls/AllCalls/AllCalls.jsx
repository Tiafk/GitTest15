import React from "react";
import Call from "./Call/Call";
import c from "../Calls.module.css";

function Calls({ calls }) {

  if(!calls.length) {
    return (
      <h1 style={{textAlign: 'center', color: '#aeaeae', margin: '20px 0 0 0'}}>
        Не найдено
      </h1>
    )
  }

  return (
    <div className={c.wrapper}>
      {calls.map((call, ye) => (
        <Call call={call} key={ye} />
      ))}
    </div>
  );
}

export default Calls;
