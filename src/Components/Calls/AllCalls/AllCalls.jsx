import React from "react";
import Call from "./Call/Call";
import c from "../Calls.module.css";

function Calls({ calls }) {
  return (
    <div className={c.wrapper}>
      {calls.map((call, ye) => (
        <Call call={call} key={ye} />
      ))}
    </div>
  );
}

export default Calls;
